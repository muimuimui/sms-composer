function SMSComposer()
{
	this.resultCallback = null;
}

SMSComposer.ComposeResultType =
{
	Cancelled:0,
	Sent:1,
	Failed:2,
	NotSent:3
}

SMSComposer.prototype.showComposer = function(recipients, body)
{
	
	var args = {};
	
	if(recipients)
		args.recipients = recipients;
	
	if(body)
		args.body = body;
	
	cordova.exec("SMSComposer.showComposer",args);
}

SMSComposer.prototype.showSMSComposerWithCB = function(cbFunction,recipients,body)
{
	this.resultCallback = cbFunction;
	this.showComposer.apply(this,[recipients,body]);
}

SMSComposer.prototype._didFinishWithResult = function(res)
{
	this.resultCallback(res);
}

cordova.addConstructor(function() {

	if(!window.plugins)	{
		window.plugins = {};
	}
	window.plugins.smsComposer = new SMSComposer();
});