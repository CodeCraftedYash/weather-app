import ExternalSites from "../components/ExternalSites"

function ContactMe() {
  return (
    <div className="text-black min-h-[calc(100vh-20vh)] md:min-h-[calc(100vh-16vh)]">
      <div className="w-[80%] md:w-[50%] mx-auto my-4 border-2 p-4 rounded-2xl">
      <p>Hi, I'm Yash — a passionate Computer Science student diving deep into web development and full-stack technologies. I love building clean, responsive, and functional user interfaces using React, TypeScript, Tailwind CSS, and more.</p>
      </div>
      <ExternalSites />
    </div>
  )
}

export default ContactMe