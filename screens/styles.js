import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 54,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'essonnes',
  },
  content: {
    fontSize: 18,
    fontFamily: 'essonnes',
  },
  imageContainer: {
    width: '100%',
    height: '25%',
  },
  image: {
    width: '100%',
  },
  subtitle: {
    fontSize: 36,
    fontFamily: 'essonnes',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  buttonContainer: {
    alignItems: 'flex-start',
    margin: 20,
    width: '70%',
  },
  leftAlignNarrowContainer: {
    alignItems: 'flex-start',
    width: '70%',
  },
  errorContainer: {
    margin: 10,
  },
  inlineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  textFieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  textField: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontFamily: 'essonnes',
    padding: 5,
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  largeMargin: {
    margin: 30,
  },
  largeMarginBottom: {
    marginBottom: 30,
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#fff',
    fontSize: 18,
    margin: 10,
  },
  navBar: {
    backgroundColor: 'transparent',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
  backgroundCircle: {
    position: 'absolute',
    borderColor: '#ff0000',
    borderWidth: 3,
    backgroundColor: '#ffbbbb',
  },
  contentMedium: {
    fontFamily: 'essonnes',
    fontSize: 22,
  },
  contentLarge: {
    fontFamily: 'essonnes',
    fontSize: 26,
  },
  marginSmall: {
    margin: 10,
  },
  disabledStyle: {
    backgroundColor: 'transparent',
    opacity: 0.2,
  },
  leftAlign: {
    alignItems: 'flex-start',
  },
  contentContainer: {
    width: '80%',
  },
});

export default styles;
