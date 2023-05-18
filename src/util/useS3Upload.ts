import * as AWS from "aws-sdk";
import {S3UploadResponse} from "../types/common";

const bucketName = process.env.REACT_APP_S3_BUCKET_NAME;
const region = process.env.REACT_APP_AWS_REGION;
const accessKeyId = process.env.REACT_APP_IAM_ACCESS_KEY_ID_DEV;
const secretAccessKey = process.env.REACT_APP_IAM_SECRET_ACCESS_KEY_DEV;

export const uploadProfileImage = async (image:File, fileName:string) => {
  try {
    const s3 = new AWS.S3({
      accessKeyId,
      secretAccessKey,
      region,
      apiVersion: 'latest',
    });

    const uploadPayload = {
      Bucket: `${bucketName}/profile_image`,
      Body: image,
      Key: fileName,
    }

    const response = <S3UploadResponse><unknown>await s3.upload(uploadPayload).promise()
    return response?.Location
  } catch (err) {
    console.error(err);
  }
}
