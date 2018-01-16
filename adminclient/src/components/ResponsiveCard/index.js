import React, { Component, PropTypes, } from 'react';
import { Card, CardHeader, CardHeaderIcon, CardContent, CardHeaderTitle, Image } from 're-bulma';
import { getRenderedComponent, } from '../AppLayoutMap';
// import 'font-awesome/css/font-awesome.css';
// import styles from '../../styles';

const propTypes = {
  headerColor: PropTypes.object,
  headerTextColor: PropTypes.object,
  cardTitle: PropTypes.any,
  display: PropTypes.bool,
  leftIcon: PropTypes.bool,
  icon: PropTypes.string,
};

const defaultProps = {
  // headerColor: styles.isSecondaryBackground,
  // headerTextColor: styles.isWhite,
  cardStyle: {
    marginBottom: '20px',
  },
  cardTitle: '',
  display: true,
  icon: 'fa fa-angle-down',
  iconDown: 'fa fa-angle-down',
  iconUp: 'fa fa-angle-right',
};

class ResponsiveCard extends Component {
  constructor(props) {
    super(props);
    this.getRenderedComponent = getRenderedComponent.bind(this);
    this.state = {
      headerColor: props.headerColor,
      headerTextColor: props.headerTextColor,
      display: props.display,
      icon: (props.display) ? props.iconDown : props.iconUp,
      iconDown: props.iconDown,
      iconUp: props.iconUp,
      cardTitle: props.cardTitle,
      cardProps: props.cardProps,
    };
  }

  expandCard() {
    this.setState({
      display: (this.state.display === true) ? false : true,
      icon: (this.state.display) ? this.props.iconUp : this.props.iconDown,
    });
  }

  render() {
    let cardIcon = (this.props.iconImage) ? <Image src={this.state.icon} {...this.props.iconImage} onClick={() => this.expandCard()}/> : <CardHeaderIcon icon={this.state.icon} onClick={() => this.expandCard()} />;
    let leftIcon = (this.props.leftIcon && !this.props.staticCard)?cardIcon:null;
    let rightIcon = (!this.props.leftIcon && !this.props.staticCard)?cardIcon:null;
    const fullCard = (
      <Card {...this.props.cardProps} isFullwidth style={this.props.cardStyle}>
        <CardHeader style={Object.assign({ cursor:'pointer', }, this.props.headerStyle)}>
          {leftIcon}
          <CardHeaderTitle style={this.props.headerTitleStyle} onClick={(this.props.staticCard)? undefined : () => this.expandCard()}>
            {(!this.state.cardTitle || typeof this.state.cardTitle ==='string')? this.state.cardTitle
              : this.getRenderedComponent(this.state.cardTitle)}
          </CardHeaderTitle>
          {rightIcon}
        </CardHeader>
        {(this.state.display) ? (
          <CardContent {...this.props.cardContentProps}>{this.props.children}</CardContent>
        ) : null}
      </Card>);
    return fullCard;
  }
}

ResponsiveCard.propTypes = propTypes;
ResponsiveCard.defaultProps = defaultProps;

export default ResponsiveCard;
