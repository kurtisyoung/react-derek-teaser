import styles from '@/pages/Home.pcss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeLocale } from '@/reducers/i18n';
import logo from '../assets/images/logo-derek-leung.jpg';
import emblem from '../assets/images/emblem.png';

const mapStateToProps = (state) => ({ t: state.i18n.messages });
const mapDispatchToProps = (dispatch) => bindActionCreators({ changeLocale }, dispatch);

@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends PureComponent {
  static propTypes = {
    t: PropTypes.object.isRequired,
    changeLocale: PropTypes.func.isRequired
  }

  static defaultProps = {
    t: {},
    changeLocale: () => {}
  }

  render() {
    const { t, changeLocale } = this.props;

    return (
      <div className={styles[`root`]}>
        {/* <Header t={t}/> */}
        <div className="flexbox">
          <div className={`${styles[`logo`]} flex-item`}>
            <img src={logo} alt="Derek Leung Prec"/>
            <h1>Relaunching Soon</h1>
          </div>
          <summary className='flex-item'>
            
            <div className={styles[`content`]}>
              <h1 className={styles[`h1`]}>Derek Leung <span>Prec</span></h1>
              <p className={styles[`description`]}>Century 21 Realty</p>
              <a href="tel:604-779-9907">604.779.9907</a>
              <a href="mailto:derek@derekleungprec.com">derek@derekleungprec.com</a>
              <br/>
              <br/>
              <a href="https://goo.gl/maps/tKGS1HyivTT2" target="_blank" rel='noopener noreferrer'>421 Pacific Street <br/>Vancouver B.C V6Z 2P5</a>
              <div className={styles[`emblem`]}></div>  
            </div>

          </summary>
        </div>
        {/* <Footer t={t} changeLocale={changeLocale}/> */}
      </div>
    );
  }
}
