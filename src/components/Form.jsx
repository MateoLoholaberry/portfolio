import React from "react";

export const Form = () => {
    return (
        <div
            id="contact"
            className="pt-24 pb-10 px-8 flex items-center justify-center"
        >
            <div className="w-full max-w-screen-md">
                <h2 className="text-4xl font-bold text-center mb-4">Contact</h2>
                <p className="text-xl text-center m-auto">
                    Feel free to reach out to me for any questions or
                    opportunities!
                </p>

                <div className="w-full flex flex-col items-center justify-center py-8 bg-blue-100 rounded-xl mt-8">
                    <h3 className="self-start font-extrabold text-3xl ml-8 mb-4">
                        Email Me! 🚀
                    </h3>
                    <form
                        action="#"
                        className="flex flex-col w-full gap-1 px-8"
                    >
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            className="border rounded-lg focus:border-blue-600 p-2.5 border-gray-500 placeholder-gray-400-100 outline-none mb-2 focus:ring-blue-200 focus:ring"
                            placeholder="Name"
                            name="name"
                            id="name"
                        />
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="border rounded-lg focus:border-blue-600 p-2.5 border-gray-500 placeholder-gray-400-100 outline-none mb-2 focus:ring-blue-200 focus:ring"
                            placeholder="Email"
                            name="email"
                            id="email"
                        />
                        <label
                            htmlFor="subject"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            className="border rounded-lg focus:border-blue-600 p-2.5 border-gray-500 placeholder-gray-400-100 outline-none mb-2 focus:ring-blue-200 focus:ring"
                            placeholder="Subject"
                            name="subject"
                            id="subject"
                        />
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Message
                        </label>
                        <textarea
                            placeholder="Message"
                            className="border rounded-lg focus:border-blue-600 p-2.5 border-gray-500 placeholder-gray-400-100 outline-none mb-2 focus:ring-blue-200 focus:ring h-44 resize-none"
                            name="message"
                            id="message"
                        ></textarea>

                        <button
                            className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-24 rounded-2xl text-lg font-medium hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/50 hover:brightness-110 active:scale-100 sm:self-end"
                            type="submit"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
