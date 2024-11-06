import React from "react";
import { useState } from "react";
import { Spinner } from "@/shared/components/spinner";
import { toast } from "sonner";

const defaultValues = {
    fullName: "",
    email: "",
    message: ""
}

export default  function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [details, setDetails] = useState({
    ...defaultValues
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("/api/send-message", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(details),
            });
            if (!res.ok) {
                return new Error("Failed to get report");
            }
            toast.success("Email sent successfully");
            setDetails({...defaultValues})
            return res.json();
        } catch (err: any) {
            toast.error(err.message || "Failed to send email");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div
            className={
                "mt-6 flex w-full lg:w-4/5 mx-auto flex-col gap-4  rounded-xl border bg-white p-6 lg:p-10"
            }
        >
            <form onSubmit={handleSubmit} className={"flex w-full flex-col gap-4"}>
                <h3 className={ 'text-3xl mb-3 font-semibold'}>Almost there.</h3>
                <p className="-mt-3">
                    Fill the form below to reach us.
                </p>
                <section className="mt-4 flex flex-col gap-4 md:flex-row">
                    <div className="w-full">
                        <label htmlFor="fullName">Full Name</label>
                        <div>
                            <input
                                id="fullName"
                                disabled={loading}
                                value={details.fullName}
                                onChange={(e) =>
                                    setDetails({ ...details, fullName: e.target.value })
                                }
                                placeholder="Provide your full name"
                                className={"mt-1 w-full rounded-lg"}
                                required
                            />
                        </div>
                    </div>
                </section>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        disabled={loading}
                        value={details.email}
                        onChange={(e) =>
                            setDetails({
                                ...details,
                                email: e.target.value,
                            })
                        }
                        placeholder="Enter your email address"
                        className={"mt-1 w-full resize-none rounded-lg pr-12"}
                        required
                    />
                </div> <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        disabled={loading}
                        value={details.message}
                        onChange={(e) =>
                            setDetails({
                                ...details,
                                message: e.target.value,
                            })
                        }
                        placeholder="Provide a brief description of the request"
                        className={"mt-1 w-full resize-none rounded-lg pr-12"}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className={"btn rounded-lg text-center"}
                    disabled={loading}
                >
                    {loading ?  <Spinner color={'#fff'}/> : "Submit"}
                </button>
            </form>
            <div>
                <p className={'text-sm'}>You can send us a direct email <a href="mailto:info@bc-capital.org" className={'text-secondary'}>here</a></p>
            </div>
        </div>
    );
}