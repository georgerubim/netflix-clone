import { Text, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppIntroSlider from "react-native-app-intro-slider"


const slides = [
  {
    key: "1",
    title: "Filmes, séries e muito mais, sem limites",
    text: "Assista onde quiser. Com um pagamento único",
    image: require("./../assets/banner.png")
  },
  {
    key: "2",
    title: "Sem mensalidade!",
    text: "Assista onde quiser. Cancele quando quiser",
    image: require("./../assets/okay.png")
  },
  {
    key: "3",
    title: "Sem mensalidade!",
    text: "Assista onde quiser. Cancele quando quiser",
    image: require("./../assets/icon.png")
  }
]

export default function Home() {
  function renderSlides({item}){
    
    if(item.key == "1"){
      return(
        <View>
          <Image source={item.image} style={{width:"100%", height:"100%"}} />

          <View style={{position:"absolute", paddingRight:"10%", paddingLeft:"10%", width:"100%", bottom:200, alignItems:"center"}}>
            <Text style={{fontSize:44,color:"white", textAlign:'center', maxWidth:400, fontWeight:"500"}}>{item.title}</Text>
            <Text style={{fontSize:22,color:"rgba(255,255,255,.7)", textAlign:'center', maxWidth:250, marginTop:20}}>{item.text}</Text>
          </View>
        </View>
      )
    }else{
      return(
        <View style={{paddingRight:"10%", paddingLeft:"10%", width:"100%",height:"100%", alignItems:"center", justifyContent:"center"}}>
          <Image source={item.image} style={{width:"100%", top:-40}} resizeMode='contain' />
          <View style={{ position:"absolute", bottom:200}}>
            <Text style={{fontSize:44,color:"white", textAlign:'center', maxWidth:400, fontWeight:"500"}}>{item.title}</Text>
            <Text style={{fontSize:22,color:"rgba(255,255,255,.7)", textAlign:'center', maxWidth:250, marginTop:20}}>{item.text}</Text>
          </View>
        </View>
      )
    }

  }

  return (
    <> 
      <View style={{position:"absolute", zIndex:2, backgroundColor:"transparent", paddingHorizontal:"5%", width:'100%', flexDirection:'row', alignItems:'center', justifyContent:"space-between"}}>
        <Image source={require("./../assets/netflix-logo.png")} style={{width:80}}  resizeMode='contain'/>
        <View style={{flexDirection:'row', gap:20}}>
          <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>Privacidade</Text>
          <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>Entrar</Text>
        </View>
      </View>
      
      <StatusBar style="light" backgroundColor='#000' />
      <AppIntroSlider 
      style={{backgroundColor: '#000'}} 
      renderItem={renderSlides} 
      data={slides}
      activeDotStyle={{backgroundColor:"white", bottom:60}}
      dotStyle={{backgroundColor:"#767779", alignSelf:"center", bottom:60}}
      showDoneButton={false}
      showNextButton={false}
      showSkipButton={false}
      />
      <TouchableOpacity style={{ position:"absolute", zIndex:3,bottom:30, backgroundColor:"#e50915", paddingVertical:14, width:"90%", borderRadius:3, marginLeft:"5%", alignItems:"center", justifyContent:"center"}}>
        <Text style={{color:"white", fontSize:18}}>VAMOS LÁ</Text>
      </TouchableOpacity>
    </>
  );
}

