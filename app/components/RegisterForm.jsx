import Link from 'next/link'

export default function RegisterForm(){
    return <div className="grid place-items-center h-screen bg-slate-500">
    <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
      <h1 className="text-xl font-bold my-4">Register Form</h1>
      <form className="flex flex-col gap-3">
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">Login</button>
        <div className="text-sm py-1 px-3 rounded-md mt-2 bg-red-500 w-fit">Error Message</div>
        <Link href={"/"} className="text-sm mt-3 text-right ">Already have an account? <span className="underline">Login</span></Link>
      </form>
    </div>
  </div>
}