import { auth } from "@/auth"
import { redirect } from "next/navigation"
import Image from "next/image"
import dbConnect from "@/lib/db"
import User from "@/models/User"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Footer } from "@/components/layout/Footer"
import { ProfileForm } from "@/components/profile/ProfileForm"

export default async function ProfilePage() {
    const session = await auth()

    if (!session?.user?.email) {
        redirect("/login")
    }

    await dbConnect()
    const user = await User.findOne({ email: session.user.email }).lean()

    if (!user) {
        redirect("/login")
    }

    // Convert keys to string to avoid serialization issues with Mongoose objects
    const serializedUser = JSON.parse(JSON.stringify(user))

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>

                    <Card>
                        <CardHeader>
                            <CardTitle>Personal Information</CardTitle>
                            <CardDescription>View and manage your account details.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            {/* Header Section with Avatar */}
                            <div className="flex items-center gap-6 pb-6 border-b">
                                <div className="relative h-24 w-24 rounded-full overflow-hidden bg-gray-100 border-2 border-white shadow-sm">
                                    {session.user.image ? (
                                        <Image
                                            src={session.user.image}
                                            alt={session.user.name || "User"}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center text-3xl text-gray-400 font-bold bg-gray-200">
                                            {session.user.name?.charAt(0) || "U"}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl">{session.user.name}</h3>
                                    <p className="text-gray-500">{session.user.email}</p>
                                    <p className="text-sm text-green-600 font-medium mt-1">Verified User</p>
                                </div>
                            </div>

                            {/* Edit Form */}
                            <ProfileForm user={serializedUser} />

                        </CardContent>
                    </Card>

                    <Card className="mt-8">
                        <CardHeader>
                            <CardTitle>Account Settings</CardTitle>
                            <CardDescription>Manage your sign-in methods and account security.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-500">
                                You are signed in with <strong>Google</strong>.
                                Password management is handled by your Google account.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    )
}
