const distributionId = 'E3SHHUK1HCOVJY';
const options = {
    wait: true,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
};
require("cloudfront-invalidate-cli")(distributionId, ["/*"], options, function (err) {
    console.log(err || "Success");
});
