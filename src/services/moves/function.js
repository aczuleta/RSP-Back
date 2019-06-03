import AWS from 'aws-sdk';
import moment from 'moment';
require('dotenv').config();

export const movesFunction = () => {

    let S3;

    // Set the region 
    const REGION = 'us-east-1';

    const paramsS3 = {
        Bucket: 'techtest-aczc',
        ACL: 'public-read',
        ContentEncoding: 'base64'
    };

    async function loadAwsConfig(){
        AWS.config.update({
            accessKeyId: process.env.AWS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_KEY
        });
        AWS.config.update({
            region: REGION
        });
        S3 = new AWS.S3();    
    }

    async function uploadToS3(imageBase64, moveName){
        loadAwsConfig();
        let base64Data = new Buffer(imageBase64.replace(/^data:image\/\w+;base64,/, ""), 'base64')
        let type = imageBase64.split(';')[0].split('/')[1]
        let params = {
            ...paramsS3,
            Key: `RSP/${moveName}-${Date.now().toString()}.png`,
            Body: base64Data,
            ContentType: `image/${type}`
        }
        return new Promise((resolve, reject) => {
            S3.upload(params, async (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve({
                    code: 100,
                    message: "Image Uploaded Correctly",
                    imageUrl: data.Location
                });
            })
        });
    }

    return {
        uploadToS3
    }
}