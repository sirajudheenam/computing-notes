import React from 'react';
import GetTemplates from './GetTemplates'
import TemplatesList from './TemplatesList'
// import sesClient from './helpers/SESClient.js'
import configData from "./config.json";
import { SESClient, ListTemplatesCommand } from "@aws-sdk/client-ses";

import axios from 'axios';
// const sesClient = new SESClient({
//   region: configData.ses.region,
//   endpoint: configData.ses.endpoint,
//   credentials: {
//     accessKeyId: configData.ses.access,
//     secretAccessKey: configData.ses.secret,
//   },
// });
// const params = { MaxItems: "10" };

class TemplatesApp extends React.Component {

  constructor() {
    super()
    this.state = { MaxItems: 10,  NextToken: '', response: [] } ;
    // this.getData = this.getData.bind(this);
    console.log('constructor');
    // const response =  sesClient.send(new ListTemplatesCommand({ params }));
    const response = axios.get('https://cronus.qa-de-1.cloud.sap/')

    console.log(response);

  }


  // { MaxItems: 10,  NextToken: '' }
  // async getData(){
  //   console.log('Reached GetData')
  //   try {
  //     const response = await sesClient.send(new ListTemplatesCommand({ params }));
  //     this.setState({response: response})
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error)
  //   } finally {
  //     console.log("finally block reached")
  //   }
  //
  // }

  // <GetTemplates templates={this.state.templates} />

  render() {
    return(
      <div className="ui container" style={{marginTop: '40px'}}>
        Template App:
        Response:
        {this.state.response}
        Params:
        {this.state.params}
      </div>
    )
  }
}

export default TemplatesApp;
