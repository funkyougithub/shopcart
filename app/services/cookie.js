import Ember from 'ember';

export default Ember.Service.extend({
	
	/*
	init(){
		this._super(...arguments); // GANZ WICHTIG
	}
	*/
	
	cookiehash: null,
	
	getMyCookieHash() {
		//https://www.sitepoint.com/how-to-deal-with-cookies-in-javascript/
		var myLocalCookie = this.getMyCookie();
		if (myLocalCookie == null)
			this.setMyCookie();	
		return this.getMyCookie();	
	},
	returnMyHash() {
		var hashtext = "";
		var hashposs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		for( var i=0; i < 17; i++ )
			hashtext += hashposs.charAt(Math.floor(Math.random() * hashposs.length));
		return hashtext;
	},
	setMyCookie() {
		var now = new Date();
		var time = now.getTime();
		var expireTime = time + 3600 * 48000;
		now.setTime(expireTime);
		document.cookie = 'vouchercube=' + this.returnMyHash() +';expires=' + now.toGMTString();
	},
	getMyCookie() {	
		var nameEQ = "vouchercube=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;		
	}	
	
});
