import React from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { Button, Dialog, Portal, TextInput } from 'react-native-paper';

type Props = {
  label: string;
  show: boolean;
  hide: () => void;
  setValue: (value: string) => void;
};

const GetTextDialog: React.FC<Props> = ({ label, show, hide, setValue }) => {
  const inputRef = React.useRef<RNTextInput>(null);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (inputRef && inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
    return () => clearTimeout(timeout);
  });
  let value = '';
  const save = () => {
    hide();
    if (value !== '') {
      setValue(value);
      value = '';
    }
  };
  return (
    <Portal>
      <Dialog visible={show} onDismiss={hide}>
        <Dialog.Content>
          <TextInput
            onChangeText={text => {
              value = text;
            }}
            label={label}
            dense
            mode="outlined"
            returnKeyType="done"
            onSubmitEditing={save}
            ref={inputRef}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hide}>Cancel</Button>
          <Button onPress={save}>Save</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default GetTextDialog;
