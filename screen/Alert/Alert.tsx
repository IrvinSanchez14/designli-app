import { useState } from "react";
import { useToast } from 'react-native-toast-notifications';
import { Button, StyleSheet, Text, View } from "react-native"
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from '@expo/vector-icons/AntDesign';
import { CRYPTO_LIST_DROPDOWN } from "../../utils/const";
import { useAppState } from "../../provider/AppContext";


const AlertScreen = () => {
  const { setCryptoList } = useAppState()
  const toast = useToast();
  const [valueCrypto, setValueCrypto] = useState<{ label: string, value: string }>({
    value: "",
    label: ""
  });
  const [isFocus, setIsFocus] = useState(false);

  const onSetCrypto = () => {
    setCryptoList(valueCrypto)
    toast.show(`Crypto ${valueCrypto.label} is set by default in the app`, {
      type: "success"
    });
  }

  return (
    <View style={{ flex: 1, }}>
      <View style={{ marginBottom: 20, padding: 10 }}>
        <Text style={{ fontSize: 30 }}>Crypto List</Text>
      </View>
      <View style={{ padding: 10 }}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={CRYPTO_LIST_DROPDOWN}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Crypto' : '...'}
          searchPlaceholder="Search..."
          value={valueCrypto}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValueCrypto(item);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
      </View>
      <View style={{ padding: 10 }}>
        <Button
          title="Set Crypto"
          onPress={onSetCrypto}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export { AlertScreen }