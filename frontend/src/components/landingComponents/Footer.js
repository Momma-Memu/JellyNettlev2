const Footer = () => {

    return (
        <div className='footer-box'>
            <div className='footer-header-box'>
                <h1 className='footer-header-links'>Contact Me</h1>
                <a href='https://github.com/OnionQueenMemu/JellyNettlev2'>
                    <i className="fab fa-github-square icon"></i>
                    Github Repo
                </a>
                <a href='https://www.linkedin.com/in/miah-barnes-2260111aa/'>
                    <i className="fab fa-linkedin icon"></i>
                    LinkedIn
                </a>
                <a href='https://miahbarnes.com'>
                    <i className="fas fa-save icon"></i>
                    Portfolio
                </a>
                <a href='https://twitter.com/OnionQueenMemu'>
                    <i className="fab fa-twitter-square icon"></i>
                    Twitter
                </a>
            </div>
            <div className='footer-header-box'>
                <h1 className='footer-header-links'>Technologies</h1>
                <div className='footer-tech-box'>
                    <div className='footer-list-box'>
                        <span className='list-label'>Backend</span>
                        <span className='list-item'>JavaScript</span>
                        <span className='list-item'>Node</span>
                        <span className='list-item'>Express</span>
                        <span className='list-item'>Sequelize</span>
                        <span className='list-item'>PostgreSQL</span>
                    </div>
                    <div className='footer-list-box'>
                        <span className='list-label'>Frontend</span>
                        <span className='list-item'>JavaScript</span>
                        <span className='list-item'>React</span>
                        <span className='list-item'>Redux</span>
                        <span className='list-item'>CSS</span>
                        <span className='list-item'>HTML</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;