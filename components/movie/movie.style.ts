import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

export default StyleSheet.create({

  // back
  buttonBack: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    color: theme.secondary,
  },

  
    dialog: {
      height: "100%",
      backgroundColor: theme.background,
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    first: {
        display: "flex",
        flexDirection: "row",
      },
      info: {
        flex: 1,
        marginLeft: 10,
      },
      poster: {
        width: 200,
        height: 300,
        resizeMode: 'cover',
        marginBottom: 10,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
        color: theme.text,

      },
      releaseDate: {
        fontSize: 16,
        marginBottom: 10,
        color: theme.text
      },
      star:{
        display: "flex",
        alignSelf: 'flex-start',
      },
      trailerButton: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
      },
      trailerButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      description: {
        fontSize: 16,
        marginBottom: 5,
        color: theme.text
      },
      genre: {
        fontSize: 16,
        marginBottom: 5,
        color: theme.text
      },
      duration: {
        fontSize: 16,
        marginBottom: 5,
        color: theme.text
      },
      director: {
        fontSize: 16,
        marginBottom: 5,
        color: theme.text
      },
      producer: {
        fontSize: 16,
        color: theme.text
      },
      button: {
        backgroundColor: theme.text,
        textAlign: "center",
        width: 150,
        borderRadius: 5
      },
      buttonText:{
        color: '#000',
        textAlign: "center",
        paddingVertical: 15,
        paddingHorizontal: 10,
      }
})