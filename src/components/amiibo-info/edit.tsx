/* eslint-disable @next/next/no-img-element */
import { AmiiboEntity } from "@/types/types";
import { Box, Button, TextField } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";


export default function AmiiboInfoEdit({amiibo, setAmiibo, setEditMode}: {amiibo: AmiiboEntity, setAmiibo: (amiibo: AmiiboEntity) => void, setEditMode: (editMode: boolean) => void}) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AmiiboEntity>({defaultValues: amiibo});

  const onSubmit: SubmitHandler<AmiiboEntity> = (data) => {setAmiibo(data); console.log(data); setEditMode(false);}
return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => <TextField required label="Name" {...field} />}
      />
      <Controller
        name="image"
        control={control}
        render={({ field }) => <TextField required label="Image" {...field} />}
      />
      <Controller
        name="character"
        control={control}
        render={({ field }) => <TextField required label="Character" {...field} />}
      />
      <Controller
        name="gameSeries"
        control={control}
        render={({ field }) => <TextField required label="Game Series" {...field} />}
      />
      <Controller
        name="amiiboSeries"
        control={control}
        render={({ field }) => <TextField required label="Amiibo Series" {...field} />}
      />
      <Controller
        name="release.eu"
        control={control}
        render={({ field }) => <TextField label="Release (EU)" {...field} />}
      />
      <Controller
        name="release.na"
        control={control}
        render={({ field }) => <TextField label="Release (NA)" {...field} />}
      />
      <Controller
        name="release.jp"
        control={control}
        render={({ field }) => <TextField label="Release (JP)" {...field} />}
      />
      <Controller
        name="release.au"
        control={control}
        render={({ field }) => <TextField label="Release (AU)" {...field} />}
      />
      <Button variant="contained" type="submit">Save</Button>
      <Button variant="contained" type="button" color="error" onClick={(e) => setEditMode(false)}>Cancel</Button>
    </Box>
  </form>
)
}