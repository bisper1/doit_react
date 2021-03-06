import React from 'react';
import PropTypes from "prop-types";

class DefaultPropsComponent extends React.Component {
  render() {
    let message1 = '';
    if (this.props.boolValue === false) {
      message1 = 'boolValue 기본값이 false 입니다.';
    }
    
    let message2 = '';
    if (this.props.boolValueWithoutDefault === false) {
      message2 = 'boolValueWithoutDefault 기본값이 false';
    }

    return (
      <div className="message-container">
        {message1}
        {message2}
      </div>
    );
  }
}

/**
 * 프로퍼티의 데이터 타입 설정
 */
DefaultPropsComponent.propTypes = {
  boolValue: PropTypes.bool,
  boolValueWithoutDefault: PropTypes.bool
};

/**
 * 기본 프로퍼티 설정
 */
DefaultPropsComponent.defaultProps = {
  boolValue : false
};

export default DefaultPropsComponent;
