import React, { Component } from 'react';
import LanguageContext from '../../contexts/LanguageContext'
import LanguageService from '../../services/language-service';
import { Link } from 'react-router-dom';
import './Dashboard.css';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  static contextType = LanguageContext;


  async componentDidMount() {
    const { language } =  await LanguageService.getLanguage();  
    this.context.setScore(language.total_score);
    this.context.setLanguage(language.name);
  }

  render() {
    let score = this.context.score;
    let language = this.context.language;

    return (<>
        <section>
          <div className='upperSection'>
            <h2 className='languageTitle'>{language}</h2>
            <p className='currentScore' >Your overall score: {score}</p> 
            <Link to={'/'}>
              <button className="basicBtn btnB">Study Mode</button>
            </Link>
            <Link to={'/learn'}>
              <button className="basicBtn btnB">Quiz Mode</button>
            </Link>
          </div>
        </section>

      </>);
  }
}

export default Dashboard;



