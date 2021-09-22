import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import BreadCrumbs from "../BreadCrumbs";
import "./style.css";

class FullFaq extends Component {
    render () {
    return (
        <section className="fullFaq pb-5">
           <div className="container pb-5">
               <div className="row">
                   <div className="col-4 offset-8 col-sm-4 offset-sm-8 col-md-3 offset-md-9 col-lg-3 offset-lg-9">
                   <BreadCrumbs />
                   </div>
                   <div className="col-md-12">
                        <h3 className="card-title title">FAQs</h3>
                   </div>
               </div>
               <Tab.Container id="left-tabs" defaultActiveKey="pricing">
               <div className="row pt-5">
                   <div className="col-md-3">
                   <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                        <Nav.Link eventKey="pricing" href="#left-tabs-tab-pricing">Pricing</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="booking">Booking</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="pickUp">Pick Up / Delivery</Nav.Link>
                        </Nav.Item>                       
                        <Nav.Item>
                        <Nav.Link eventKey="vehicle">Vehicle</Nav.Link>
                        </Nav.Item>                        
                        <Nav.Item>
                        <Nav.Link eventKey="service">Service</Nav.Link>
                        </Nav.Item>                        
                        <Nav.Item>
                        <Nav.Link eventKey="glossary">Shipping Glossary</Nav.Link>
                        </Nav.Item>
                    </Nav>
                   </div>
                   <div className="col-md-9">
                   <Tab.Content>
                    <Tab.Pane eventKey="pricing">
                    <h3 className="card-title">Pricing</h3>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="pricing" title="How do I get a quote for shipping my vehicle?">
                                <p className="tab-paragraph">To get a quote for shipping your vehicle, you can either email us or you can call (303) 353-8362 to receive a quote from one of our car transport pricing specialists. In order for us to calculate your quote we will need to know the location you are shipping from and to, the type of vehicle you would like to ship, and the date your vehicle will be ready.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="pricing" title="How is my car shipping cost calculated?">
                                <p className="tab-paragraph">When determining your car shipping cost, there are a few factors that we take into account in order to provide you with an accurate price quote. The mileage between the origin and destination is the biggest factor that contributes to your total rate. In addition to the distance of your relocation, another factor is the type and condition of the vehicle being shipped. The final factor is the date that your vehicle will be ready for transport. There are also additional options, such as enclosed carrier and top-load service that can be added to your shipment at the time of booking for a higher level of service.</p>
                            </Tab>
                        </Tabs>                        
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="pricing" title="How do I pay for my auto shipping?">
                                <p className="tab-paragraph">We accept all major credit cards, electronic transfer, postal money order, and bank/certified check, Venmo, CashApp, Zelle for the deposit or full pre-payment of your shipment. If a balance is due upon delivery, it can be paid directly to the driver and can be paid in either cash, bank/certified check, postal money order, Zelle, CashApp, Venmo.</p>
                            </Tab>
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab credit-ancor" className="mb-3">
                            <Tab eventKey="pricing" title="Can I pay the full transport cost with my credit card?">
                                <p className="tab-paragraph">Yes, you can pay the full transport cost via credit card. If you want to pay in full online, you can do so at the time of booking either online or by phone with a shipping agent. With this option, you can make a convenient, one-time payment with a credit or debit card. You also have the option of paying a deposit with your credit card and then paying the rest of your remining balance with cash upon delivery.</p>
                            </Tab>
                        </Tabs>
                    </Tab.Pane>
                    <Tab.Pane eventKey="booking">
                        <h3 className="card-title">Booking</h3>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="booking" title="How far in advance should I schedule my transport?">
                                <p className="tab-paragraph">The further in advance you schedule your shipment, the more likely we will be able to meet the time requirements you desire. For best results, we suggest scheduling your transport at least 2 to 3 weeks in advance. Expedited shipping options are available in order to accomodate shipments that require . You can always give us a call and ask one of our car shipping experts what your options are in terms of the schedule for your car transport.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="booking" title="What details do you need to place an order?">
                                <p className="tab-paragraph">We will need the address for the locations that your vehicle will be picked up from and delivered to, along with the name and phone number of the contact person at each location. We will also need the date that your vehicle will be ready and the year, make, and model of the vehicle(s) that will be transported.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="booking" title="Can I place an order if I don’t know the exact address?">
                                <p className="tab-paragraph">Yes, the city and zip code will suffice until your exact pickup or delivery location is known.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="booking" title="Can I place an order if I don’t know the exact address?">
                                <p className="tab-paragraph">Yes, the city and zip code will suffice until your exact pickup or delivery location is known.</p>
                            </Tab>      
                        </Tabs>
                    </Tab.Pane>
                    <Tab.Pane eventKey="pickUp">
                        <h3 className="card-title">Pick Up / Delivery</h3>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="pickUp" title="Does someone have to be present for pick up and delivery?">
                                <p className="tab-paragraph">Yes, there must be someone present to release and accept the vehicle, provide keys to the driver and sign the initial and final inspection reports. This person can be anyone over the age of 18 that you trust with releasing or accepting your vehicle.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="pickUp" title="Where will my car be picked up and delivered?">
                                <p className="tab-paragraph">The driver will get the car transporter as close to your door as he can legally and safely get. In most cases, the driver will be able to pickup and deliver directly at your door. Some cities may have restrictions on large trucks that prohibit them from driving into residential areas. Auto transport trucks are large and need lots of room to maneuver and turn around, so if access to the pickup or delivery location is restricted by narrow streets, low-hanging trees or tight turns, the driver may ask that you meet at a location nearby with a large parking lot, such as a grocery store.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="pickUp" title="What is the bill of lading and what exactly does it have to do with my shipment?">
                                <p className="tab-paragraph">The bill of lading is a very important document used by car shipping companies to document any pre-existing damage on the vehicle during the time of pickup. It also serves as a record of your contact info and the official agreement for transport. If you want to file any insurance claim regarding your shipment you will need the Bill of Lading.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="pickUp" title="When will my vehicle be delivered?">
                                <p className="tab-paragraph">The transit time for your shipment is based mostly on the mileage between the pickup and delivery location. Generally, every five hundred miles will add one day to the transit time - so for a 1,000 mile transport, the transit time would be 2-3 days. Check out our estimated transit times for a detailed view of approximate delivery times.</p>
                            </Tab>      
                        </Tabs>
                    </Tab.Pane>
                    <Tab.Pane eventKey="vehicle">
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="vehicle" title="Can I put personal items in my vehicle?">
                                <p className="tab-paragraph">You may ship personal belongings inside of your car, the total weight of these items cannot be more than a hundred pounds and has to be left in the trunk or back seats (under the window line). Please note that personal belonging are not covered under insurance if they are reported as damaged or missing.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="vehicle" title="How much gas should I have in my car during transport?">
                                <p className="tab-paragraph">You should have about a quarter of a tank of gas in your car at the time of shipment. This leaves enough for the car to be loaded and unloaded but doesn't add much additional weight.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="vehicle" title="How do I get my car ready for shipment?">
                                <p className="tab-paragraph">Make sure your car has been completely clean, both inside and outside. This is particularlly important because this will help the driver conduct their inspection in order to assess any pre-existing damage on your vehicle. You will also want to make there are no additional personal items in the vehicle unless you intend to ship those with the vehicle (remember those items must total less than 75 pounds combined and kept below the window-line of the vehicle). Be sure to inform the driver of any special circumstances concerning the vehicle. Finally, make sure there is a quarter tank of gas in the car at the time it is picked up for shipment.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3" href="#vehicle-ancor">
                            <Tab eventKey="vehicle" title="Can I ship my vehicle if it isn't running?" href="#vehicle-ancor">
                                <p className="tab-paragraph">Yes, we can ship vehicles that are in non-running/inoperable condition. When inoperable cars are shipped, a special auto carrier is required that makes use of a winch which is connected to your car and slowly and safely pulls your vehicle onto the carrier. There is an additional fee for inpoerable vehicles because of the special equipment and extra work involved with securing the vehicle onto the transporter. You can select the inoperable option on the online booking form or inform your shipping agent if you make your reservation by phone so that the proper arrangements can be made to accomodate a non-running vehicle.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="vehicle" title="Can I ship a modified or oversized vehicle?">
                                <p className="tab-paragraph">Yes, through our advanced network of specialized carrier nationwide, we can ship vehicles of any size. However, you will need to call for a specialized rate quote based on the dimensions of the oversized vehicle you would like to ship. Our online quote calculator will not be able to generate a quote for you because pricing via the calculator is based only on standard and unmodified vehicle sizes and specfications.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="vehicle" title="Can I ship a vehicle with low ground clearance?">
                                <p className="tab-paragraph">Yes, however any vehicle with clearance lower than 4 inches will likely need to be shipped on an enclosed trailer with a lift gate. Low-clearance vehicles simply cannot be driven onto an open trailer because the car would risk bottoming out while being loaded onto the carrier.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="vehicle" title="Do I need license plates on a vehicle to ship it?">
                                <p className="tab-paragraph">No, we just need the vehicle and keys.</p>
                            </Tab>      
                        </Tabs>
                    </Tab.Pane>
                    <Tab.Pane eventKey="service">
                        <h3 className="card-title">Service</h3>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="service" title="What is door-to-door car transport?">
                                <p className="tab-paragraph">Door-to-door car transport is the full service delivery of your vehicle directly from the door at the pickup location to the door at the delivery location. Our drivers do their best to get as close as physically and legally possible to the pickup and delivery locations, but in certain instances there may be restrictions preventing them from being able to safely reach your door. Our transporters need ample space to maneuver and load/unload your vehicle. If your street is too narrow, or if there are hazards such as low lining trees or power lines, drivers may ask that you meet them at a location nearby where they can safely load or unload your vehicle, such as a large parking lot or shopping center nearby.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="service" title="What methods of car shipping services do you offer?">
                                <p className="tab-paragraph">We offer open car shipping and enclosed car shipping services. Open car shipping is used much more frequently and is the type of auto transport that you see on the highway where carriers are hauling vehicles on two decks that are exposed. Enclosed car shipping is when your vehicle is shipped in a trailer which has walls and a roof, they look like a larger version of a regular eighteen-wheeler. This method is recommended for luxury, exotic or classic cars.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="service" title="What type of truck will transport my car?">
                                <p className="tab-paragraph">That depends on the car shipping service you choose. It will be either an open or enclosed trailer hauling multiple vehicles. Either way, the truck will be quite large. You can call us anytime if you have questions about a carriers ability to bring their truck onto your street.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="service" title="What is top load service?">
                                <p className="tab-paragraph">Top load service is when your car is placed on the higher deck or level of an open auto transport trailer. This is considered to be preferable to the bottom load because the cars on the lower deck are at risk of possibly having fluid from the cars above leak on them.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="service" title="What types of vehicles do you ship?">
                                <p className="tab-paragraph">Top One Transportation specializes in shipping all types of vehicles such as sedans, SUVs, pickup trucks, minivans, oversized vehicles, antiques, classic cars, motorcycles, construction vehicles, inoperable cars and boats. If you are not sure whether or not we can ship your vehicle, you can give us a call to find out what we can do for you.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="service" title="What is the difference between open and enclosed transport?">
                                <p className="tab-paragraph">Open transport is the most common car shipping method. There are two types of open-air transporters. A majority of shipments are completed with larger 8-10 car carriers. Smaller carriers which hold 2-3 cars are used for shorter more local moves. There is typically more frequent availability for open-air carriers since they are used more often. We suggest choosing enclosed shipping methods when shipping classic, luxury or exotic vehicles. Enclosed transporters guarantee maximum protection from exposure to any open-air elements on the road. We suggest booking your enclosed transport in advance since there is limited carrier availability.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="service" title="Can I ship a car from an auto auction?">
                                <p className="tab-paragraph">Yes, we ship dozens of cars each week from salvage auctions and other types of auto auctions. Each auction will have different requirements to release a vehicle and we'll get all the necessary details from you at the time of booking. Please make sure the vehicle is fully paid and ready for release from the auction. Also be aware that if a vehicle is booked as operable but it turns out that the vehicle is inoperable, there will be an additional cost and the original trucker may not be able to accommodate an inoperable vehicle.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="service" title="Is my vehicle insured during transport?">
                                <p className="tab-paragraph">All shipments include basic liability coverage during transit. Comprehensive insurance options are available for an elevated level of shipment coverage during transit. You will be able to select a level of coverage during the booking process. If you have further questions regarding insurance options give us a call.</p>
                            </Tab>      
                        </Tabs>
                    </Tab.Pane>
                    <Tab.Pane eventKey="glossary">
                        <h3 className="card-title">Pick Up / Delivery</h3>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="glossary" title="Auto Logistics">
                                <p className="tab-paragraph">The top to bottom process of shipping a vehicle. This includes the coordination with your carrier, the route selection, the pickup and drop-off locations, scheduling of your shipment and much more.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="glossary" title="Backhaul">
                                <p className="tab-paragraph">This term is what experts in the vehicle transport industry commonly use to refer to a vehicle’s return trip.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="glossary" title="Bill of Lading">
                                <p className="tab-paragraph">This is a critically important document during the car shipping process which documents the condition of the vehicle at the time of the pickup. It is also a record of your contact information (address, phone number etc.) as well as the official agreement for transport. You also must have this document in order to file any insurance claim regarding your shipment.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="glossary" title="Bonded">
                                <p className="tab-paragraph">This means a company has been deemed sufficiently ready to provide a service to its clients. Essentially, a company being bonded obligates a company to compensate a customer for damages if they occur. This protects the customer’s interests but also allows the company to demonstrate how reliable it is, which helps facilitate business.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="glossary" title="Car Hauling">
                                <p className="tab-paragraph">This is another name for car shipping. Generally, it is used to describe shipping a vehicle a short distance but can be used to describe any sort of auto shipping.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="glossary" title="Co-loading">
                                <p className="tab-paragraph">The shipping of multiple vehicles during one shipment by one individual. This is more efficient than shipping multiple cars on multiple shipments and is more cost effective.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="glossary" title="Cut Off Time">
                                <p className="tab-paragraph">The term used in the car shipment process that defines the latest time for a vehicle to be delivered to its destination.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="glossary" title="Diversion">
                                <p className="tab-paragraph">This is when the route for a shipment changes during the shipment due to unforeseen circumstances such as inclement weather or traffic situations.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="glossary" title="Door-To-Door Auto Shipping">
                                <p className="tab-paragraph">The process where an auto transport driver will pick your vehicle up at your exact requested location rather than you having to meet the driver nearby or at a pickup terminal.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="glossary" title="Team Drivers">
                                <p className="tab-paragraph">This is when there are 2 drivers in the truck and enables the non-stop movement of freight because this eliminates the necessity for rest stops. This procedure is best for expedited or perishable freight being shipped long distances.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="glossary" title="Department of Transportation (D.O.T.)">
                                <p className="tab-paragraph">The D.O.T. is the government organization that passes and upholds legislation concerning all highway, air, railroad, and maritime transportation in the United States.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="glossary" title="Enclosed Auto Transport">
                                <p className="tab-paragraph">This is when you ship your car on a trailer with a roof and walls, otherwise known as an enclosure. This provides much more protection from the weather and other potentially damaging hazards on the road which your vehicle is normally exposed to during a regular car transport.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="glossary" title="Expedited Auto Transport">
                                <p className="tab-paragraph">This service is for when you need your car shipped as fast as possible. This will speed up the car transport process but will also cost more.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="glossary" title="Exception">
                                <p className="tab-paragraph">This is the process where notes are made when the shipment is received at the carriers' terminal or put onto a vessel. They show any abnormalities in packaging or actual or suspected damage to the shipment. They are then added to the bill of lading.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="glossary" title="FMCSA">
                                <p className="tab-paragraph">The Federal Motor Carrier Safety Administration is an established government agency which is a smaller part of the Department of Transportation. The FMCSA is responsible for regulating motor carrier and driver safety on the roads.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="glossary" title="Lowboy">
                                <p className="tab-paragraph">This is a type of car hauler where the deck height drops below the height of the wheels in order to be able to carry taller standing loads.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="glossary" title="MC Number">
                                <p className="tab-paragraph">The MC number, or Motor Carrier Number, is issued by the U.S. Department of Transportation and the FMCSA.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="glossary" title="Open Carrier Transport">
                                <p className="tab-paragraph">This is any carrier without an enclosure. These are the most common types of carriers that you’ll see out on the road. They do not offer any protection from the elements.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="glossary" title="Operating Authority">
                                <p className="tab-paragraph">The allowance given by the Department of Transportation to run any sort of freight company which encompasses car shipping companies.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="glossary" title="Pickup Window">
                                <p className="tab-paragraph">This is the period in which your car will be picked up for shipment. The full window generally tends to be about three or four days long.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="glossary" title="Proof of Delivery (POD)">
                                <p className="tab-paragraph">The receipt/documentation that your vehicle has been delivered.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="glossary" title="Shared Vehicle Shipping / Shared Car Carrier">
                                <p className="tab-paragraph">These are how the most common car shipping carriers operate. Usually, the cost of the entire transport is divided up between all the cars on the transport thus making it cheaper for all parties involved.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="glossary" title="Stinger Steered">
                                <p className="tab-paragraph">This is a type of car hauler where the 5th wheel is positioned on a drop frame set behind and lower than the rearmost axle of the power unit.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="glossary" title="Top Load">
                                <p className="tab-paragraph">This is the name for all the cars on the upper portion of the auto carrier. If you choose to have your car in the top load it normally costs an additional fee.</p>
                            </Tab>      
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab" className="mb-3">
                            <Tab eventKey="glossary" title="Terminal">
                                <p className="tab-paragraph">The terminal is a facility that acts as a central hub where vehicles are shipped and stored in order to be picked up by the client. This is now a rarely used form of vehicle shipping since door-to-door shipping became more popular.</p>
                            </Tab>      
                        </Tabs>
                    </Tab.Pane>
                    </Tab.Content>
                   </div>
               </div>
               </Tab.Container>
           </div>
        </section>
    )
    }

}

export default FullFaq;