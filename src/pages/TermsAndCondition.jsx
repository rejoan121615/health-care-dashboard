import React from "react";
import { Link } from "react-router-dom";

const TermsAndCondition = () => {
    return (
        <section className=" bg-form-bg w-screen min-h-screen">
            <div className="container mx-auto py-16">
                <h1 className=" text-white text-6xl mb-4">
                    Terms and condition
                </h1>
                <div className="">
                    <p className=" text-white mb-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut recusandae voluptatum, quibusdam, dicta voluptate
                        doloremque voluptas rem perferendis quasi, ipsum aliquid
                        corporis laudantium! Nesciunt omnis obcaecati molestias
                        tempore illo adipisci. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Ut recusandae voluptatum,
                        quibusdam, dicta voluptate doloremque voluptas rem
                        perferendis quasi, ipsum aliquid corporis laudantium!
                        Nesciunt omnis obcaecati molestias tempore illo
                        adipisci.
                    </p>
                    <p className=" text-white mb-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut recusandae voluptatum, quibusdam, dicta voluptate
                        doloremque voluptas rem perferendis quasi, ipsum aliquid
                        corporis laudantium! Nesciunt omnis obcaecati molestias
                        tempore illo adipisci. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Ut recusandae voluptatum,
                        quibusdam, dicta voluptate doloremque voluptas rem
                        perferendis quasi, ipsum aliquid corporis laudantium!
                        Nesciunt omnis obcaecati molestias tempore illo
                        adipisci.
                    </p>
                    <p className=" text-white mb-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut recusandae voluptatum, quibusdam, dicta voluptate
                        doloremque voluptas rem perferendis quasi, ipsum aliquid
                        corporis laudantium! Nesciunt omnis obcaecati molestias
                        tempore illo adipisci. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Ut recusandae voluptatum,
                        quibusdam, dicta voluptate doloremque voluptas rem
                        perferendis quasi, ipsum aliquid corporis laudantium!
                        Nesciunt omnis obcaecati molestias tempore illo
                        adipisci.
                    </p>
                    <p className=" text-white mb-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut recusandae voluptatum, quibusdam, dicta voluptate
                        doloremque voluptas rem perferendis quasi, ipsum aliquid
                        corporis laudantium! Nesciunt omnis obcaecati molestias
                        tempore illo adipisci. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Ut recusandae voluptatum,
                        quibusdam, dicta voluptate doloremque voluptas rem
                        perferendis quasi, ipsum aliquid corporis laudantium!
                        Nesciunt omnis obcaecati molestias tempore illo
                        adipisci.
                    </p>
                    <p className=" text-white mb-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut recusandae voluptatum, quibusdam, dicta voluptate
                        doloremque voluptas rem perferendis quasi, ipsum aliquid
                        corporis laudantium! Nesciunt omnis obcaecati molestias
                        tempore illo adipisci. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Ut recusandae voluptatum,
                        quibusdam, dicta voluptate doloremque voluptas rem
                        perferendis quasi, ipsum aliquid corporis laudantium!
                        Nesciunt omnis obcaecati molestias tempore illo
                        adipisci.
                    </p>
                    <p className=" text-white mb-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut recusandae voluptatum, quibusdam, dicta voluptate
                        doloremque voluptas rem perferendis quasi, ipsum aliquid
                        corporis laudantium! Nesciunt omnis obcaecati molestias
                        tempore illo adipisci. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Ut recusandae voluptatum,
                        quibusdam, dicta voluptate doloremque voluptas rem
                        perferendis quasi, ipsum aliquid corporis laudantium!
                        Nesciunt omnis obcaecati molestias tempore illo
                        adipisci.
                    </p>
                </div>
          {/* button list  */}
          <div className="flex justify-center mt-6">
            <Link to="/sign-up" className=" bg-white px-8 py-2 text-form-bg font-bold capitalize rounded-md mr-5"> accept </Link>
            <Link to="/home" className=" bg-white px-8 py-2 text-form-bg font-bold capitalize rounded-md"> decline </Link>
          </div>
            </div>
        </section>
    );
};

export default TermsAndCondition;
