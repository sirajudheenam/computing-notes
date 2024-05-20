import { SESClient, ListTemplatesCommand } from "@aws-sdk/client-ses";
import configData from "../config.json";

const sesClient = () => {
  new SESClient({
    region: configData.ses.region,
    endpoint: configData.ses.endpoint,
    credentials: {
      accessKeyId: configData.ses.access,
      secretAccessKey: configData.ses.secret,
    },
  });
}
export default sesClient;
