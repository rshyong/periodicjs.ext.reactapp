import React, { Component, } from 'react'; 
import { Nav, NavGroup, NavItem, Button, Container, Input, Hero, HeroHead, } from 're-bulma'; // FormHorizontal, NavToggle, ControlLabel, Group,
import { Link, } from 'react-router';
// import ResponsiveLink from '../ResponsiveLink';;;
import 'font-awesome/css/font-awesome.css';
import styles from '../../styles';
import { all_prefixes, } from '../../../../utilities/route_prefixes';
import capitalize from 'capitalize';
import { getRenderedComponent, } from '../AppLayoutMap';
import { Dropdown } from 'semantic-ui-react'

class AppHeader extends Component {
  constructor(props /*, context*/) {
    super(props);
    this.state = {
      ui: props.ui,
      user: props.user,
    };
    this.all_prefixes = all_prefixes(props.settings.adminPath);
    this.getRenderedComponent = getRenderedComponent.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      ui: nextProps.ui,
      user: nextProps.user,
    });
  }
  render() {
    // console.debug('this.all_prefixes.manifest_prefix', this.all_prefixes.manifest_prefix);
    let buttonColor = this.props.settings.ui.header.buttonColor;
    let globalSearch = (this.props.settings.ui.header.useGlobalSearch) ? (
      <NavGroup align="center" style={{ flex:3, }}>
        <NavItem  style={styles.fullWidth}>
          <Input type="text" placeholder="Search" isExpanded style={styles.fullWidth}/>
        </NavItem>
      </NavGroup>) : null;
  
    let logoImage = this.getRenderedComponent({
      component: 'ResponsiveLink',
      props: {
        location: '/',
        style: {
          height: '40px',
          display: 'inline-flex',
        }
      },
      children: [{
        component: 'img',
        props: {
          src: this.props.settings.ui.header.customLogo || '/favicon.png',
          alt: `${this.props.settings.name}`,
          style: {
            maxHeight: 'none',
            height: '100%',
            width: 'auto',
          }
        }
      }]
    });
    let profileStyle = Object.assign({
      width: '42px',
      height: '42px',
      display: 'inline-block',
      backgroundColor: 'white',
      borderRadius: '24px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }, this.props.settings.ui.header.profileImageStyle, {
        backgroundImage: 'url(' + (this.props.user.profile_image_preview || this.props.settings.default_user_image || '/favicon.png') + ')',
    })

    let dropdownLinks = (this.props.settings.ui.header.productHeader.productLinks.length > 0)
      ? this.props.settings.ui.header.productHeader.productLinks.map(link => {
        return (
          <Dropdown.Item text={link.text} onClick={() => { this.props.reduxRouter.push(link.location)}}/>
        )
        })
      : null;

    return (
      <Hero color={this.props.settings.ui.header.color} isBold={this.props.settings.ui.header.isBold} style={Object.assign(styles.fixedTop, styles.navContainer, this.props.settings.ui.header.containerStyle)}
      className={(this.props.settings.ui.initialization.show_header || this.props.user.isLoggedIn) ? 'animated fadeInDown Header-Speed' : 'animated slideOutDown Header-Speed'}>
        {(this.props.ui && this.props.ui.components && this.props.ui.components.header && typeof this.props.ui.components.header==='object' && this.props.ui.components.header.layout) 
        ? this.getRenderedComponent(this.props.ui.components.header.layout)
          : (this.props.settings.ui.header.productHeader.layout) ? (<HeroHead>
          <Container>
            <Nav style={{ boxShadow:'none', }}>
                <NavGroup align="left">
                  <NavItem>
                    {logoImage}
                  </NavItem>
                  <NavItem style={this.props.settings.ui.header.navLabelStyle}>
                    <span style={Object.assign({ fontSize: '17px', }, this.props.settings.ui.header.navLabelStyle)}>{this.props.settings.ui.header.productHeader.headerTitle}</span>
                  </NavItem>
                </NavGroup>  
                {globalSearch}
                <NavGroup align="right" style={{ display: 'flex'}}>
                  <NavItem style={Object.assign({padding: 0, alignItems: 'stretch'}, this.props.settings.ui.header.navLabelStyle)}>
                    <Dropdown text={this.props.ui.nav_label} style={{ display: 'flex', alignItems: 'center', padding: '10px'}}>
                      <Dropdown.Menu style={{right: '0px', left:'initial'}}>
                        {dropdownLinks}
                    </Dropdown.Menu>
                    </Dropdown>
                  </NavItem> 
                  <NavItem style={Object.assign({ padding: 0, alignItems: 'stretch' },this.props.settings.ui.header.navLabelStyle)}>
                    <Dropdown style={{ display: 'flex', alignItems: 'center',padding:'10px 0 10px 10px'}} trigger={(<div style={profileStyle}></div>)}>
                      <Dropdown.Menu style={{right: '0px', left:'initial'}}>
                        <Dropdown.Item text='My Account' onClick={() => { this.props.reduxRouter.push(`${this.all_prefixes.manifest_prefix}account/profile`)}}/>
                      <Dropdown.Item text='Log Out' onClick={this.props.logoutUser}/>
                    </Dropdown.Menu>
                    </Dropdown>
                  </NavItem>
              </NavGroup>
            </Nav>
          </Container>
        </HeroHead>) : (<HeroHead>
          <Container>
            <Nav style={{ boxShadow:'none', }}>
                <NavGroup align="left">
                    <NavItem>
                      {(this.props.settings.ui.header.customButton && typeof this.props.settings.ui.header.customButton === 'object' &&
                        this.props.settings.ui.header.customButton.layout) 
                      ? this.getRenderedComponent(this.props.settings.ui.header.customButton) 
                      : <Button onClick={this.props.toggleUISidebar} buttonStyle="isOutlined" color={buttonColor} icon="fa fa-bars" style={styles.iconButton} /> }
                    </NavItem>
                  <NavItem style={Object.assign({ justifyContent: 'flex-start' }, styles.fullWidth)}>
                    {(!this.props.settings.ui.header.useGlobalSearch && this.props.ui.nav_label) ? (
                      <NavItem >
                        <span style={Object.assign({ fontSize:'20px', }, this.props.settings.ui.header.navLabelStyle)}>{this.props.ui.nav_label}</span>
                      </NavItem>) : null}
                  </NavItem>
                </NavGroup>  
                {globalSearch}
              <NavGroup align="right" isMenu>
                {<NavItem>
                  <Link to={`${this.all_prefixes.manifest_prefix}account/profile`} style={Object.assign({ fontSize:'20px', }, styles.noUnderline, this.props.settings.ui.header.userNameStyle)}>
                    {`${capitalize(this.state.user.firstname || '')} ${capitalize(this.state.user.lastname || '')}`}
                  </Link>
                </NavItem> }  
                  <NavItem>{this.getRenderedComponent({
                    component: 'ResponsiveLink',
                    props: {
                      location: `${this.all_prefixes.manifest_prefix}account/profile`,
                      style: profileStyle,
                    },
                  })}</NavItem>    
                {(this.state.user.isLoggedIn && this.props.settings.ui && this.props.settings.ui.header && this.props.settings.ui.header.useHeaderLogout) ? 
                  (<NavItem>
                    <Button buttonStyle="isOutlined" onClick={this.props.logoutUser} color={buttonColor} icon="fa fa-sign-out"  style={Object.assign({ paddingRight:0, }, styles.noMarginLeftRight)} />
                  </NavItem>)
                  : null
                } 
              </NavGroup>
            </Nav>
          </Container>
        </HeroHead>)
        }
      </Hero>
    );
  }
}

export default AppHeader;