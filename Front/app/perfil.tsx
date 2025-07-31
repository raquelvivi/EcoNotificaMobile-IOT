import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function Perfil() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.leftPanel}>
          <Image
            source={require('../assets/images/comunidade.png')}
            style={styles.avatar}
          />
          <Text style={styles.name}>Marie Horwitz</Text>
          <Text style={styles.role}>Perfil</Text>
          <Image
            source={require('../assets/images/criar.png')}
            style={styles.editIcon}
          />
        </View>

        <View style={styles.divider} />

        <View style={styles.rightPanel}>
          <Text style={styles.sectionTitle}>Informação</Text>
          <View style={styles.row}>
            <View style={styles.infoBlock}>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.value}>exemplo@email.com</Text>
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.label}>Cidade</Text>
              <Text style={styles.value}>xique-xique,BH</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Projetos</Text>
          <View style={styles.row}>
            <View style={styles.infoBlock}>
              <Text style={styles.label}>lixeiras conectadas</Text>
              <Text style={styles.value}>3</Text>
            </View>
          </View>

          <View style={styles.socialRow}>
            <FontAwesome name="facebook" size={20} color="#1B4242" />
            <FontAwesome name="twitter" size={20} color="#1B4242" style={styles.icon} />
            <FontAwesome name="instagram" size={20} color="#1B4242" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9E4CC',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    elevation: 6,
    width: '100%',
    maxWidth: 800,
    minHeight: 400,
    overflow: 'hidden',
  },
  leftPanel: {
    width: '45%',
    backgroundColor: '#5C8374',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    paddingHorizontal: 15,
  },
  avatar: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  role: {
    fontSize: 14,
    color: '#E0FBE2',
  },
  editIcon: {
    width: 24,
    height: 24,
    marginTop: 12,
  },
  divider: {
    width: 1,
    backgroundColor: '#ccc',
  },
  rightPanel: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1B4242',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  infoBlock: {
    flex: 1,
    paddingRight: 10,
  },
  label: {
    fontWeight: 'bold',
    color: '#5C8374',
  },
  value: {
    color: '#1B4242',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 16,
    marginTop: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
});