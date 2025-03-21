import {Link, NavLink} from 'react-router-dom'
export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl ">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Download Now
                            <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <img className='h-40' src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2E1bmN4d2EwNXE3cWcxMHp3ZzF0NjhnOTk0c2ZtbXZxNzN1OGl4byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wBSsIKHZB1jb6log86/giphy.gif" alt="" />
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-[full]" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZm9meTh4cWNibGhtdXUzbzJ0djZ0NmdhbDlvaDNyanduOTE4aXh5YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tpVKvAabWt3G5csMkT/giphy.gif"  alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGo2MGJybzd1dm5tYnZ2cGY2dnd1bXZ1ZHhqZndqdWwxcGEzbjZ6ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lkRHAuqpcUpzWVltqE/giphy.gif" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
        </div>
    );
}
