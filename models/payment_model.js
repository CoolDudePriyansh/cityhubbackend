var db=require('../dbconnection');

var Payment={
    getAllPayment:function(callback)
    {
      return  db.query("Select * from payment_tbl",callback);
    },
    getPaymentById:function(id,callback)
    {
       return db.query("Select * from payment_tbl where pk_payment_id=?",[id],callback);
    },
    addPayment:function(Payment,callback)
    {
      return db.query("Insert into payment_tbl(fk_email_id,card_number,expiry_date,cvv) values(?,?,?,?)",[Payment.fk_email_id,Payment.card_number,Payment.expiry_date,Payment.cvv],callback);
    },
    deletePayment:function(id,callback)
    {
        return db.query("delete from payment_tbl where pk_payment_id=?",[id],callback);
    },
};
module.exports=Payment;