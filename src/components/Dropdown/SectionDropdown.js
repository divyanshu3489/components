import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Modal, View, SectionList } from 'react-native'; 
import PropTypes from "prop-types";

//Sample array format for dropdown
  /*sectionListData = [
    {"title":"", "data":""},
    .....
  ]*/

const SectionDropdown = (props) => {

  //Props
  const data = props.data;
  const onSelect = props.onSelect;
  const dropdownHeader = props.dropdownHeader;
  const visibleState = props.visibleState;
  const selectionDone = props.selectionDone;
  const customStyles = props.customStyles;


  const DropdownButton = useRef();
  const [visible, setVisible] = useState(visibleState);
  const [selected, setSelected] = useState(undefined);
  //const [dropdownTop, setDropdownTop] = useState(0);


  const onItemPress = (item) => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
    selectionDone(false)
  };

  //Item Separator Component
  const myItemSeparator = () => {
    return (
      <View style={{ height: 1, backgroundColor: "gray", marginHorizontal:4 , marginLeft:10}}
    />
  )}
  
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text style={styles.meetingTime}>{item.label}</Text>
    </TouchableOpacity>
  );

  const renderDropdown =() => {
    
    return (
      <Modal visible={visible} transparent={true}>
        
        <View style={styles.overlay}>
            
          <View style={[styles.dropdown, customStyles["dropdownStyle"]]}>
            {
            !dropdownHeader ?  null:
            <View style={[styles.dropdownHeader, customStyles["headerStyle"]]}>
              <Text style={[styles.dropdownHeaderText, customStyles["headerText"]]}>{dropdownHeader}</Text>
            </View>
            }
            {
              data.length == 0 ?
              <View style={{alignItems:"center", justifyContent:"center", minHeight:200}}> 
                <Text style={{color:"black"}}>Data not available</Text> 
              </View> 

              :

              <SectionList
                sections={data}
                renderSectionHeader={({ section }) => (
                  <View style={styles.sectionHeader}>
                    <Text style={styles.sectionHeaderText}>{section.title}</Text>
                  </View>
                )}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={myItemSeparator}
              />
            }
              <TouchableOpacity
                style={[styles.dropdownButtonView, customStyles["cancelButton"]]}
                activeOpacity={0.8}
                onPress={()=> {
                  setVisible(false)
                  selectionDone(false)
                }}
              >
                <Text style={[styles.dropdownButton, customStyles["cancelText"]]}>Cancel</Text>
              </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  return(
    renderDropdown()
  )
};

const styles = StyleSheet.create({
  button: {
    //width:300,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf:"center",
    backgroundColor: 'white',
    height:40,
    borderColor:"gray",
    borderWidth:1,
    borderRadius:5,
    justifyContent:"space-evenly"
    //zIndex: 1,
  },
  buttonText: {
    flex: 1,
    fontSize:14,
    textAlign: 'center',
    //textAlignVertical:"center",
    color:"black"
  },
  sectionHeader:{
    backgroundColor:"black",
    height:40,
    justifyContent:"center"
  },
  sectionHeaderText:{
    fontSize:18,
    color:"white",
    paddingLeft:10,
    //textAlignVertical:"center"
  },
  icon: {
    marginRight: 10,
  },
  dropdown: {
    backgroundColor: '#fff',
    width:250,
    maxHeight:350,
    borderRadius:5,
  },
  overlay: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"rgba(0,0,0,0.8)"
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    //borderBottomWidth: 0.5,
  },
  meetingTime:{
    fontSize:16,
    color:"black"
  },
  dropdownHeader:{
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#000000",
    height:40,
    borderTopLeftRadius:5,
    borderTopRightRadius:5
  },
  dropdownHeaderText:{
    color:"#ffffff",
    fontSize:14,
  },
  dropdownButtonView:{
    //flexDirection:"row", 
    backgroundColor:"black",
    alignItems:"center",
    justifyContent:"center",
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    height:40
  },
  dropdownButton:{
    color:"#ffffff", 
    padding:5,
  }
});

//Default Values for Props
SectionDropdown.defaultProps = {
  visibleState:false,
  customStyles:{
    headerStyle:{},
    headerText:{},
    cancelButton:{},
    cancelText:{},
    dropdownStyle:{}
  }
}

SectionDropdown.propTypes = {
  data:PropTypes.array,
  onSelect:PropTypes.any,
  dropdownHeader:PropTypes.string,
  visibleState:PropTypes.bool,
  selectionDone:PropTypes.any,
  customStyles:PropTypes.shape({
    headerStyle:PropTypes.object,
    headerText:PropTypes.object,
    cancelButton:PropTypes.object,
    cancelText:PropTypes.object,
    dropdownStyle:PropTypes.object
  })
}

export default SectionDropdown;
