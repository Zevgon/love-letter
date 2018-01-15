import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666',
  },
  title: {
    flex: 1,
    fontSize: 30,
  },
  screen: {
    flex: 1,
    margin: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 8,
  },
  inlineContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  textField: {
    backgroundColor: '#fff',
    fontSize: 18,
    padding: 5,
    flex: 8,
    margin: 10,
    borderRadius: 5,
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#fff',
    fontSize: 18,
  },
});

export default styles;
