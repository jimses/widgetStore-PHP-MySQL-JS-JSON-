var randomnumber=Math.random()
            var str = "";
            var regon = 0;
            function createCookie(name,value,days) {
                if (days) {
                    var date = new Date();
                    date.setTime(date.getTime()+(days*24*60*60*1000));
                    var expires = "; expires="+date.toGMTString();
                    var reg = ";reg=false"
                }
                else var expires = "";
                document.cookie = name+"="+value+expires+"; path=/"+reg;
            }

            function readCookie(name) {
                var nameEQ = name + "=";
                var ca = document.cookie.split(';');
                for(var i=0;i < ca.length;i++) {
                    var c = ca[i];
                    while (c.charAt(0)==' ') c = c.substring(1,c.length);
                    if (c.indexOf(nameEQ) == 0)
                        return c.substring(nameEQ.length,c.length);

                }

                return null;
            }

            function eraseCookie(name) {
                createCookie(name,"",-1);
            }

            function checkCookie()
            {
                var getcookie = readCookie('_widg');
                if ((getcookie!=null))
                {
                    console.log('getcookie : '+getcookie)
                    return getcookie;
                }

                else
                {
                    createCookie("_widg",randomnumber,365);
                }

            }


            function helpReg(regon){
                var regin = regon;

                createCookie("_widg",regin,365);
            }
            function hideHelp(){
                createCookie("_widg",1,365);
            }
            hideHelp()
