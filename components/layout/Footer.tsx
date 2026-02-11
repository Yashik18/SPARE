import Link from "next/link"
import Image from "next/image"

export function Footer() {
    return (
        <footer className="bg-white border-t" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Spare</span>
                            <Image
                                className="h-10 w-auto"
                                src="/logo.png"
                                alt="Spare Logo"
                                width={150}
                                height={50}
                            />
                        </Link>
                        <p className="text-sm leading-6 text-gray-600">
                            Storage as a consumer utility. Secure, flexible, and tech-enabled.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Solutions</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                            Household Storage
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                            Business Storage
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                            Packaging
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                            Moving
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Support</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                            Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                            Documentation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                            Guides
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                            Prohibited Items
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                            Careers
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                            Privacy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                            Terms
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-gray-500">&copy; 2024 Spare Storage Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
