import resume from '../assets/resume.docx' 

const Resume = () => {
  return (
    <div className='resume'>
      <a href={resume} download className="btn">Download Resume</a>
      <a href='#contact' className="btn btn-primary">Let's Talk!</a>
    </div>
  )
}

export default Resume
