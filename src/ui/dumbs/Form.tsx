import { SubmitHandler, useForm } from "react-hook-form";
import { Button, GroupBox, TextInput, Tooltip } from "react95";

export type FormsInput = {
    freelance: {
        names: string;
        social: string;
        address: string;
        email: string;
    };
    client: {
        names: string;
        social: string;
        address: string;
        poste: string;
        email: string;
        company: string;
    };
}

const Forms = ({ onSubmit }: { onSubmit: (input: FormsInput) => void }) => {

    const {
        register,
        handleSubmit,
      } = useForm<FormsInput>()

      const onSubmitForm: SubmitHandler<FormsInput> = (data) => onSubmit(data);

    return (
        <form onSubmit={handleSubmit(onSubmitForm)} style={{ display: 'flex', flexDirection: 'column', gap: 10}}>
            <Form title="Freelance">
                <TextInput
                    placeholder='Prénom & Nom'
                    fullWidth
                    {...register("freelance.names", { required: true })}
                />
                <TextInput
                    placeholder='Raison sociale'
                    fullWidth
                    {...register("freelance.social", { required: false })}
                />
                <TextInput
                    placeholder='Adresse'
                    fullWidth
                    {...register("freelance.address", { required: false })}
                />
                <TextInput
                    placeholder='Email'
                    fullWidth
                    {...register("freelance.email", { required: true })}
                />
            </Form>
            <Form title="Client">  
                <TextInput
                    placeholder='Prénom & Nom'
                    fullWidth
                    {...register("client.names", { required: true })}
                />
                <TextInput
                    placeholder='Raison sociale'
                    fullWidth
                    {...register("client.social", { required: false })}
                />
                <TextInput
                    placeholder='Entreprise'
                    fullWidth
                    {...register("client.company", { required: false })}
                />
                <TextInput
                    placeholder='Adresse'
                    fullWidth
                    {...register("client.address", { required: false })}
                />
                <TextInput
                    placeholder='Email'
                    fullWidth
                    {...register("client.email", { required: false })}
                />
            </Form>
            <Tooltip text='Tes données sont sauvés dans le navigateur' enterDelay={100} leaveDelay={500}>
                <Button primary type="submit" fullWidth>Sauvegarder</Button>
            </Tooltip>
        </form>
    )
}
const Form = ({ children, title }: { children: React.ReactElement | React.ReactElement[], title: string }) => {
    return (
        <GroupBox label={title} style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {children}
        </GroupBox>
        );
}

export default Forms;