import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { loadAsync } from 'expo-font';

class FontLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  // eslint-disable-next-line react/no-deprecated
  async componentWillMount() {
    await loadAsync({
      // eslint-disable-next-line global-require
      Roboto_bold: require('@joaobgusmao/typeface-roboto/files/Roboto-Bold.ttf'),
    });

    this.setState({ loading: false });
  }

  render() {
    const { children } = this.props;
    const { loading } = this.state;

    if (loading) {
      return <AppLoading />;
    }

    return children;
  }
}

export default FontLoader;
