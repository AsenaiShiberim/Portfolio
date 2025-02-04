import Title from "./title";

export default function Contact() {


    return (

        
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form 
                    action="https://getform.io/<your-endpoint>" 
                    method="POST" 
                    className="flex flex-col w-full md:w-7/12"
                > 
                        <Title>Contact</Title>

                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="p-2 my-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="10"
                        className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                    ></textarea>
                    <button 
                        type="submit"
                        className="text-center inline-block px-6 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-black"
                    >
                        Say Hello
                    </button>
                </form>
            </div>
        </div>
    );
}
