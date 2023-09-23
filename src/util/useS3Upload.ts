import * as AWS from 'aws-sdk';
import { S3UploadResponse } from '../typeSpec/common';

const bucketName = process.env.REACT_APP_S3_BUCKET_NAME;
const region = process.env.REACT_APP_AWS_REGION;
const accessKeyId = process.env.REACT_APP_IAM_ACCESS_KEY_ID_DEV;
const secretAccessKey = process.env.REACT_APP_IAM_SECRET_ACCESS_KEY_DEV;

export const uploadProfileImage = async (
  image: File,
  fileName: string,
  folder: string
) => {
  try {
    const s3 = new AWS.S3({
      accessKeyId,
      secretAccessKey,
      region,
      apiVersion: 'latest',
    });

    const uploadPayload = {
      Bucket: `${bucketName}${folder}`,
      Body: image,
      Key: fileName,
    };

    const response = (await s3
      .upload(uploadPayload)
      .promise()) as S3UploadResponse;
    return response?.Location;
  } catch (err) {
    console.error(err);
  }
};
