import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React,{Component, useContext} from 'react';
import { UserContext } from '../../App';
export class GoogleMap extends Component {
  render() {
    const style = {
        width: '100%',
        height: '100%'
      }
      const containerStyle = {
        position: 'relative',  
        width: '100%',
        height: '100%'
      }
    return (
      <Map  containerStyle ={containerStyle} style={style} google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
           
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyDtWc30vdwPZjPamCn5LygxJqfrymR8qMI")
})(GoogleMap)