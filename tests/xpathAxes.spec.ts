/*

sourcenodexpath/axesmethod::/targetnodexpath

sourcenodexpath/axesmethod::/targetnodewithindex

:: => filter

//td[text()='Learn Selenium']/following-sibling::td[1]                                             =>following-sibling

//td[text()='Learn Selenium']/following-sibling::td[text()='Amit']


//td[text()='$10.99']/preceding-sibling::td[1]                                                     =>preceding-sibling


//*[@id="post-body-1307673142697428135"]/div[1]/child::input[1]                                    =>child

//*[@id="post-body-1307673142697428135"]/div[1]/child::input[@id="name"]


//*[@id="PageList1"]/div/ul/li[1]/a/preceding::span[text()='For Selenium, Cypress & Playwright']   =>preceding --use when not want immediate element


//h1/following::a[text()='Download Files']                                                         =>following --use when not want immediate element


//div[@id='section1']/descendant::button                                                          =>descendant

//*[@id="HTML1"]/div[1]/table/tbody/descendant::*                                                 =>'*' for all


interview example(amazon.in) - search iphone then from name of the phone locate the xapth for price

//span[text()='iPhone 17 Pro Max 256 GB: 17.42 cm (6.9″) Display with Promotion, A19 Pro Chip, Best Battery Life in Any iPhone Ever, Pro Fusion Camera System, Center Stage Front Camera; Silver']/ancestor::div[@class="puisg-col-inner"]/descendant::span[@class="a-price-whole"]

//span[text()='']/ancestor::div[@class="puisg-col-inner"]/descendant::span[@class="a-price-whole"]  =>ancestor descendant technique

//span[text()='']/ancestor::div[@class="puisg-col-inner"]//span[@class="a-price-whole"]  =>instead of 'descendant::' u can use '//'


from name of the phone locate ratings

//span[text()='']/ancestor::div[@class="puisg-col-inner"]//span[contains(text(),'stars')]


using following/preceding and index

(//span[text()='iPhone 17 Pro Max 256 GB: 17.42 cm (6.9″) Display with Promotion, A19 Pro Chip, Best Battery Life in Any iPhone Ever, Pro Fusion Camera System, Center Stage Front Camera; Silver']/following::span[@class="a-price-whole"])[1]

(//span[text()='']/following::span[@class="a-price-whole"])[1] 













*/