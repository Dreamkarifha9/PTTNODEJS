const Datatest = require('../data')
const moment = require('moment-timezone');

exports.queryData = async function (req, res, next) {
  res.status(200).send()
}

exports.queryDatatestget = async function (req, res, next) {
  //**** ค้นหา ค่าตามโจทย์ที่ได้มา ใน ก้อนข้อมูลที่จำลองขึ้้นมา */
  const SendData_ = Datatest.data.filter(item => {
    return item.Testdata_string === "0"
  });
  //**** ตรวจสอบข้อมูลก่อนว่ามีหรือไม่ ถ้าไม่มีให้ respond กลับไปว่าไม่พบข้อมูล */
  if (SendData_.length === 0) {
    res.json({message: 'Data Not Found'});
    res.status(404).send()
    return
  }
  //*** และส่งออกไปในรูปแบบ JSON  */
   res.json(SendData_);
  res.status(200).send()
}

exports.queryDatatestpost = async function (req, res, next) {
  //**** รับ data json ที่ถูกส่งมา */
  const {data} = req.body
  const CurrentDatetime = new Date();

  //*** Create Current Datetime Add to Data_ */
  data.forEach((a) => {a.Date = moment(CurrentDatetime).tz('Asia/Bangkok').format()})
 

  //**** ค้นหาข้อมูล data json ที่ถูกส่งมา */
  const FilterData_ = data.filter(item => {
    return item.Testdata_string === "0";
  })

  //**** นำข้อมูลที่ค้นได้จาก data json ไป ค้นใน database ต่อเพื่อที่จะ respond กลับไปให้ client */
  const SendData = Datatest.data.filter(item => {
   return item.Testdata_string === FilterData_[0].Testdata_string
  })
    //**** ตรวจสอบข้อมูลก่อนว่ามีหรือไม่ ถ้าไม่มีให้ respond กลับไปว่าไม่พบข้อมูล */
  if (SendData.length === 0) {
    res.json({message: 'Data Not Found'});
    res.status(404).send()
    return
  }
  res.json(SendData);
  res.status(200).send()
}