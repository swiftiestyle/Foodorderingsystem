import React, { Component } from 'react';
import './../../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import ReactMapGL,{Marker,Popup, FullscreenControl ,NavigationControl} from 'react-map-gl';
import { toast } from 'react-toastify';
//import mapboxgl from 'mapbox-gl';
import Directions from 'react-map-gl-directions';
import './../../../../../node_modules/react-map-gl-directions/dist/mapbox-gl-directions.css';
class Map2 extends Component {
    state = { 
        viewPort:{
            latitude:28.594097,
        longitude: 77.018661,
        zoom: 15,
        width:'1200px',
        height:'500px'
        },
        selected:1,
        userLat:0,
        userLng:0,
        userReq:false,
        showPopupUser:false,
        showMarker:false
        
     }
     mapRef = React.createRef()

     getCoordinates=(position)=>
    {
        const {latitude}=position.coords;
        const {longitude}=position.coords;

        this.setState({userLat:latitude});
        this.setState({userLng:longitude});

        const viewPort={
            latitude:this.state.userLat,
    longitude: this.state.userLng,
    zoom: 10,
    width:'1200px',
    height:'500px'
        }
          this.setState({viewPort});

          
    }

    getLocation=()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates);
            const x=true;
            this.setState({userReq:x});
            this.setState({showPopup:true});
            this.setState({showMarker:true});

          } else { 
            toast.error("Geolocation is not supported by this browser.");
          }
    }

    render() { 
        


        const styles={marginTop:100};
        const deselcted=0;
        return (<div className="container" style={styles}>

            <h1 ><i><center>Map For Reference</center></i>   </h1>
            <br></br>
         
            <ReactMapGL  ref={this.mapRef}  onViewportChange={(viewPort)=>{this.setState({viewPort})}} mapStyle="mapbox://styles/janabhishek2/ckiw5zews2i0u19o77nc2gm7p" {...this.state.viewPort} mapboxApiAccessToken="pk.eyJ1IjoiamFuYWJoaXNoZWsyIiwiYSI6ImNraXc1Z3c0ZTNnM2gydnFqdHdrOGxpcGEifQ.t1mXdjR57fjDVeuIJEguxg">
        
        <Directions position="bottom-left" mapRef={this.mapRef} mapboxApiAccessToken={"pk.eyJ1IjoiamFuYWJoaXNoZWsyIiwiYSI6ImNraXc1Z3c0ZTNnM2gydnFqdHdrOGxpcGEifQ.t1mXdjR57fjDVeuIJEguxg"} />

        {this.state.showPopup && <Popup
          latitude={this.state.userLat}
          longitude={this.state.userLng}
          closeButton={true}
          closeOnClick={false}
          onClose={() => this.setState({showPopup: false})}
          anchor="bottom" >
          <div>You are here</div>
          <div><b>Latitude : {this.state.userLat}</b><br/>
         <b> Longitude : {this.state.userLng}</b>
          </div>
        </Popup>}
        <div style={{position: 'absolute', left: 0}}>
          <FullscreenControl container={document.querySelector('container')} label={"Full-Screen View"}/>
          
        </div>
        <div style={{position: 'absolute', right: 0,top:0}}>
          <NavigationControl />
        </div>
         {/* <Marker latitude={28.594097} longitude={77.018661} ><button onClick={()=>{
                const selected=1;
                this.setState({selected});
            }} className="btn btn-sm"><img src="https://codelabs.developers.google.com/codelabs/advanced-android-training-google-maps/img/3077e66f9f7a1a46.png" width="15" height="20"/></button></Marker>
            
             <Marker latitude={this.state.userLat} longitude={this.state.userLng} ><button className="btn btn-sm"><img src="https://codelabs.developers.google.com/codelabs/advanced-android-training-google-maps/img/3077e66f9f7a1a46.png" width="15" height="20"/></button></Marker> */}
            
            {this.state.selected==1 ? <Popup onClose={()=>{this.setState({selected:deselcted})}} latitude={28.594097} longitude={77.018661}><div>
                <b>GGSIPU</b>
                <p>USICT , GGSIPU , DWARKA  <br/>
                   SECOR-16C</p>
                </div></Popup> :null}
              
        </ReactMapGL>

            
        

<div className="d-flex justify-content-center row">
<button className="btn btn-info m-3 btn-lg col-5" onClick={()=>{
            const viewPort={ latitude:28.594097,
                longitude: 77.018661,
                zoom: 15,
                width:'1200px',
                height:'500px'};
                this.setState({viewPort});
                this.setState({selected:1});
        }}>Click To Show the restaurant on Map !</button>
         <button className="col-5 m-3 btn btn-primary btn-lg" onClick={this.getLocation}>Click to get Your Location</button>
</div>


      
    </div>  );
    }
}
 
export default Map2;