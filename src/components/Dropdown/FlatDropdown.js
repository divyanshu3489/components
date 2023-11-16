import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, Modal, View, TextInput, Animated, ScrollView } from 'react-native';
import { primaryFontColor } from '../../appStyles/fontStyles';
import PropTypes from "prop-types";

//Sample array format for dropdown
//selectionType = single
  /*data = [
    {"label":"", "value":""},
    .....
  ]*/

//selectionType = multiple
  /*data = [
    {"label":"", "value":"", selected:true/false},
    .....
  ]*/

const FlatDropdown = (props) => {

  //Props
  const data = props.data;
  const onSelect = props.onSelect;
  const selectionType = props.selectionType.toLowerCase();
  const showSearch = props.showSearch;
  const dropdownHeader = props.dropdownHeader;
  const subHeaderText = props.subHeaderText;
  const visibleState = props.visibleState;
  const selectionDone = props.selectionDone;
  const customStyles = props.customStyles;
  const showCancel = props.showCancel;
  const mandatoryField = props.mandatoryField;

  //Local States
  const [visible, setVisible] = useState(visibleState);
  const [inputBox, setInputBox] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState(undefined);
  const [multiSelect, setMultiSelect] = useState([])
  const [text, setText] = useState("");
  const [itemSelected, setItemSelected] = useState([])
  const [originalLength , setOriginalLength] = useState()
  const [initialized, setInitialized] = useState(false);
  const [lsData, setLsData] = useState(data);


  //Initializing data
  let listData=[];
  if(data){
    listData = data;
  }

  //Initializing multiSelect array with already selected countries
  useEffect(()=>{
    if(!initialized){
      if(selectionType == "multiple"){
        listData && listData.length != 0 ?
          listData.map((data)=>{
          if(!data.value){
            if(data.selected){
              multiSelect.push(data.label)
            }
          }else if(data.value){
            if(data.selected){
              multiSelect.push(data.value)
            }
          } 
        }) : null
      }
      setOriginalLength(multiSelect.length); 
    }
    setInitialized(true);
  },[])

  const onItemPress = (item) => {
    if(selectionType == "single"){
      if(!item.value){
        /* if(item.selected){
          item.selected = false
        }else
        {
          item.selected = true
        } */
        selectionDone(false);
        setSelected(item);
        onSelect(item);
        setVisible(false);
        setText("")
      }
      else{
        setSelected(item);
        onSelect(item);
        setVisible(false);
        setText("");
        selectionDone(false);
      }
      
    }
    else if(selectionType == "multiple")
    {
      //Data array provided only have label
      if(!item.value){
        if(item.selected){
          item.selected = false
        }
        else{
          item.selected = true
        }
        
        if(item.selected){
          if(item.label.toLowerCase() == "other"){
            setInputBox(true);
          }
          else {
            setMultiSelect(multiSelect=>[...multiSelect, item.label])
            setItemSelected(itemSelected=>[...itemSelected, item])
          }
        }
        else{
          if(item.label.toLowerCase() == "other"){
            setInputBox(false);
            setMultiSelect(multiSelect=>multiSelect.filter((data)=> data != inputValue))
            setItemSelected(itemSelected=>itemSelected.filter((data)=> data != inputValue))
          }
          setMultiSelect(multiSelect=>multiSelect.filter((data)=> data != item.label))
          setItemSelected(itemSelected=>itemSelected.filter((data)=> data != item))
        }
      }
      //Data array provided have both label and value
      else if(item.value){
        if(item.selected){
          item.selected = false
        }
        else{
          item.selected = true
        }
        if(item.selected){
          if(item.label.toLowerCase() == "other"){
            setInputBox(true);
          }
          else {
            setMultiSelect(multiSelect=>[...multiSelect, item.value])
            setItemSelected(itemSelected=>[...itemSelected, item])
          }
        }
        else{
          if(item.label.toLowerCase() == "other"){
            setInputBox(false);
            setMultiSelect(multiSelect=>multiSelect.filter((data)=> data != inputValue))
            setItemSelected(itemSelected=>itemSelected.filter((data)=> data != inputValue))
          }
          setMultiSelect(multiSelect=>multiSelect.filter((data)=> data != item.value))
          setItemSelected(itemSelected=>itemSelected.filter((data)=> data != item))
        }
      } 
    }
  }

  //Filter for search
  const searchFilterFunction = (text) =>{
    let searchedText = '';
    if (text && text.trim() != '') {
      listData = listData.filter((data) => {
        searchedText = data.label;
        return (searchedText.toLowerCase().indexOf(text.toLowerCase()) > -1);
      });
    }
  }
 
  //Remove selected when press cancel
  const removeSelection =()=>{
    itemSelected.map((value)=>{
      if(value.selected){
        value.selected = false
      }
    })
  }  
  
  // const RenderItem = ({item}) =>{  
  const renderItem = ({item}) =>{  
    /* console.log(item)
    //item.selected not available then add it only for multiple selection
    if(selectionType == "multiple"){
      if(!item.selected){
        item["selected"] = false;
      }
    } */
    //Selected item color
    var Color = item.selected ? "#afeeee": null
    return(
      <TouchableOpacity
        style={[styles.item, {backgroundColor:Color}]} 
        onPress={() => {
            onItemPress(item)
        }}
      >
          <Text style={[styles.listItem, {color:/* item.selected ? "blue":  */"black"}]}>{item.label}</Text>  
      </TouchableOpacity>
    );
  } 
  
  const RenderDropdown = ()=> {
    return (
      <Animated.View style={[styles.dropdown, customStyles["dropdownStyle"]]}>
      {
        listData && listData.length == 0 ? 
        <View style={{alignItems:"center", justifyContent:"center", minHeight:200}}> 
          <Text style={{color:"black"}}>Data not available</Text> 
        </View> 
          :
        <FlatList
          data={listData}
          renderItem={renderItem}
          initialNumToRender={10}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      }
      { !inputBox ? null :
          <TextInput
            style={styles.otherInput}
            placeholder="Other"
            onChangeText={(value)=> setInputValue(value)}
            onEndEditing={()=>{
              if(inputValue){
                setMultiSelect(multiSelect=>[...multiSelect, inputValue])
                setItemSelected(itemSelected=>[...itemSelected, inputValue])
              }
            }}
          />
      }
      { showCancel?
        <View style={styles.dropdownButtonView}>
          <TouchableOpacity
            style={[styles.cancelButton, customStyles["cancelButton"], {borderBottomLeftRadius:5, borderBottomRightRadius: selectionType == "single" ? 5:0}]}
            activeOpacity={0.8}
            onPress={()=> {
              setVisible(false)
              removeSelection()
              setMultiSelect([])
              setItemSelected([])
              selectionDone(false)
              setText("")
            }}
          >
            <Text style={[styles.dropdownButton, customStyles["cancelText"]]}>Cancel</Text>
          </TouchableOpacity>
            {
              selectionType == "multiple" ?
              <TouchableOpacity
                style={[styles.cancelButton, customStyles["cancelButton"], {borderBottomRightRadius:5}]}
                activeOpacity={0.8}
                onPress={()=> {
                  setVisible(false)
                  onSelect(multiSelect.length === 0 ? "" : multiSelect)
                  selectionDone(false)
                  setText("")
                  setMultiSelect([])
                  setItemSelected([])
                }}
                disabled={ mandatoryField ? (itemSelected.length > 0 || (multiSelect.length < originalLength && multiSelect.length != 0))? false:true: false }    
              >
                <Text 
                style={
                  [styles.dropdownButton, customStyles["cancelText"], {color: mandatoryField ?  (itemSelected.length > 0 || (multiSelect.length < originalLength && multiSelect.length != 0))? "#ffffff":"#888888" :"#ffffff"}]
                }>OK</Text>
              </TouchableOpacity> : null
            }
        </View> : null
      }
      </Animated.View>
    );
  };

  //rendering dropdown
  return(
    <>
      { showSearch?
        <TextInput
          style={styles.searchText}        
          placeholder="Search"
          value={text}
          onChangeText={(value) =>setText(value)}
          onChange={listData.length>0 ? searchFilterFunction(text):null}
          autoCorrect={false}
        />  : null 
      }
      <RenderDropdown/>
    </>
  )
};


const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: '#fff',
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
    //width:275,
    //maxHeight:340,
    //borderRadius:5, 
  },
  overlay: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"rgba(0,0,0,0.8)"
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom:2
  },
  listItem:{
    fontSize:20,
    textAlign:"center"
  },
  searchText:{
    fontSize:18,
    backgroundColor: '#fff',
    borderColor:"#807f7f",
    borderBottomWidth:1,
    marginTop:5,
    // borderRadius:10,
    // borderBottomEndRadius:0,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    paddingBottom:2,
    paddingTop:3,
    paddingVertical:25,
    textAlign:"center",
    textAlignVertical:"center",
    color:primaryFontColor
  },
  otherInput:{
    fontSize:12,
    marginLeft:5,
    marginRight:5,
    borderColor:"#c8c8c8",
    borderWidth:2,
    marginTop:10,
    marginBottom:10,
    borderRadius:5,
    paddingBottom:2,
    paddingTop:2,
    paddingLeft:15,
    color:primaryFontColor
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
  subHeaderText:{
    color:"#ffffff",
    fontSize:10,
  },
  dropdownButtonView:{
    flexDirection:"row", 
    height:40
  },
  dropdownButton:{
    color:"#ffffff",  
  },
  cancelButton:{
    flex:1,
    backgroundColor:"black",
    alignItems:"center",
    justifyContent:"center"
  }
});

//Default Values for Props
FlatDropdown.defaultProps = {
  selectionType:"single",
  visibleState:false,
  subHeaderText:"",
  showCancel:true,
  mandatoryField:true,
  customStyles:{
    headerStyle:{},
    headerText:{},
    subHeaderText:{},
    cancelButton:{},
    cancelText:{},
    dropdownStyle:{}
  }
}

FlatDropdown.propTypes = {
  data:PropTypes.array,
  onSelect:PropTypes.any,
  selectionType:PropTypes.string,
  showSearch:PropTypes.bool,
  dropdownHeader:PropTypes.string,
  subHeaderText:PropTypes.string,
  visibleState:PropTypes.bool,
  selectionDone:PropTypes.any,
  showCancel:PropTypes.bool,
  mandatoryField:PropTypes.bool,
  customStyles:PropTypes.shape({
    headerStyle:PropTypes.object,
    headerText:PropTypes.object,
    subHeaderText:PropTypes.object,
    cancelButton:PropTypes.object,
    cancelText:PropTypes.object,
    dropdownStyle:PropTypes.object
  })
}

export default FlatDropdown;