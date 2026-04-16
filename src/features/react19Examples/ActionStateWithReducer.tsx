import { useActionState } from "react";

export const ActionStateWithReducer = () => {
  const [status, submit, isPending] = useActionState(async (_prev: string, formData: FormData) => {
    console.log({ formData });
    
    const res : { ok: boolean} = await new Promise(resolve => setTimeout(() => resolve({ ok: true }), 1000));
    return res.ok ? "success" : "error";
  }, "idle");

  return (
    <>
      <form action={submit}>
        <input name="name" placeholder="First name" />
        <input name="lastName" placeholder="Last name" />
        <button type="submit">Send</button>
        {!isPending && status === "success" && <p>Sent!</p>}
        {isPending && <div>Saving...</div>}
      </form>
    </>
  );
};
