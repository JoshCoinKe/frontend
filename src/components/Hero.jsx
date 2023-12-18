import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import TransferForm from "./TransferForm";

const Hero = () => {
  return (
    <div className="container mt-20 m-auto px-4">
      {/* Div1 */}
      <div className="flex flex-col lg:flex-row  p-10 w-auto h-full" id="div1">
        {/* Left Div */}
        <div className="basis-1/2 self-center ">
          <h1 className="text-sm mb-4 font-medium">SEND MORE FOR LESS</h1>
          <p className="text-4xl font-bold mb-6">
            International Transfer made{" "}
            <span className="text-green-600">Safer, Faster & Affordable</span>
          </p>

          {/* Currency Conversion Box */}

          <p className="text-sm font-semibold">
            Join thousands of people who trust Bitcoin with their international
            money transfers, now!
          </p>
        </div>

        {/* Right Div */}
        <div className="basis-1/2 mt-6 lg:mt-0 h-3/4">
          <TransferForm />
        </div>
      </div>

      {/* Why Us */}
      <div id="div2" className="flex flex-col lg:flex-row p-10 w-auto h-3/4">
        {/* Left Div */}
        <div className="basis-1/4 mt-6 lg:mt-0 h-3/4 self-center">
          <img
            src={pic2}
            alt="image 2"
            className="w-auto h-auto rounded-md"
            style={{ height: "300px" }}
          />
        </div>
        {/* Right Div */}
        <div className="basis-3/4 mt-5">
          <h1 className="text-sm mb-4 text-center underline font-bold">
            WHY CHOOSE US
          </h1>
          <p className="text-xl lg:text-42l font-bold mb-6">
            The Safest Way To Transact Your Money Fast
          </p>
          <div id="div01">
            <div id="div02" className="flex flex-col lg:flex-row ">
              <div
                id="div03"
                className="flex flex-col lg:flex-row mb-5 items-center space-x-4 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg text-black "
              >
                <div id="div04" className="shrink-0">
                  <img src={pic1} alt="" className="h-12 w-12" />
                </div>
                <div id="div05">
                  <h1 className="text-xl font-medium text-black">
                    We are Simple
                  </h1>
                  <p className="text-slate-500">
                    We bring one-click international money transfer solutions,
                    at your fingertips. Just visit our website, log-in and send
                    money globally 24X7
                  </p>
                </div>
              </div>
              <div
                id="div03"
                className="flex flex-col lg:flex-row mb-5 items-center space-x-4 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg text-black"
              >
                <div id="div04" className="shrink-0">
                  <img src={pic1} alt="" className="h-12 w-12" />
                </div>
                <div id="div05">
                  <h1 className="text-xl font-medium text-black">
                    We are Fast
                  </h1>
                  <p>
                    We ensure complete transparency in order to keep your money
                    safe. With Bitcoin, track your money, stay informed and stay
                    in control.
                  </p>
                </div>
              </div>
            </div>
            <div id="div02" className="flex flex-col lg:flex-row mb-5">
              <div
                id="div03"
                className="flex flex-col lg:flex-row mb-5 items-center space-x-4 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg text-black"
              >
                <div id="div04" className="shrink-0">
                  <img src={pic1} alt="" className="h-12 w-12" />
                </div>
                <div id="div05">
                  <h1 className="text-xl font-medium text-black">
                    We are Safe
                  </h1>
                  <p>
                    Privacy is everything. And we make sure that nothing invades
                    yours. Our industry-leading technology protects your money
                    in every transaction.
                  </p>
                </div>
              </div>
              <div
                id="div03"
                className="flex flex-col lg:flex-row  items-center space-x-4 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg text-black"
              >
                <div id="div04" className="shrink-0">
                  <img src={pic1} alt="" className="h-12 w-12" />
                </div>
                <div id="div05">
                  <h1 className="text-xl font-medium text-black">
                    We are Simple
                  </h1>
                  <p>
                    We value speed. And this is the reason why 95% of our
                    transactions are completed within minutes you tap on the
                    Send button.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="p-5 w-auto h-3/4">
        <div>
          <h3 className="text-sm">HOW IT WORKS?</h3>
          <p className="text-xl lg:text-2xl font-bold">
            Send Money To Your Loved Ones Without Any Hassle
          </p>
        </div>
        <div></div>
      </div>

      {/* Testimonials */}
    </div>
  );
};

export default Hero;
