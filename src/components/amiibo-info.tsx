/* eslint-disable @next/next/no-img-element */
'use client'

import { getAmiiboById } from "@/data/get-amiibo" 
import { useQuery } from "@tanstack/react-query"
import { Alert, CircularProgress, FormControlLabel, FormGroup, Switch } from "@mui/material";
import { ZodError } from "zod";
import { useState } from "react";
import AmiiboInfoContent from "./amiibo-info/content";
import AmiiboInfoEdit from "./amiibo-info/edit";
import { AmiiboEntity } from "@/types/types";

export default function AmiiboInfo({id}: {id: string}) {
  const [editMode, setEditMode] = useState(false);
  const [amiibo, setAmiibo] = useState<AmiiboEntity>();

  const { data, isLoading, isFetching, isError, error } = useQuery({ queryKey: ['amiibo', id], queryFn: (context) => getAmiiboById(id, context) });

  if (isLoading || isFetching) return <CircularProgress />

  if (isError) {
    if (error instanceof ZodError && (error as ZodError).errors[0].code === 'invalid_union') {
      return <Alert severity="error">No Amiibo was found with ID {id}</Alert>
    }
    return <Alert severity="error">Something went wrong while loading Amiibo data.<br />{error.name}</Alert>
  }

  let amiiboData = data?.amiibo;

  if (typeof amiiboData === 'undefined' || amiiboData === null) return <Alert severity="error">No Amiibo was found with ID {id}</Alert>

  if (Array.isArray(amiiboData)) amiiboData = amiiboData[0]

  if (typeof amiibo === 'undefined') {
    setAmiibo(amiiboData);
  }

  if (typeof amiibo === 'undefined') return <Alert severity="error">No Amiibo was found with ID {id}</Alert>

  return <>
    {editMode ? <AmiiboInfoEdit amiibo={amiibo} setAmiibo={setAmiibo} setEditMode={setEditMode} /> : <AmiiboInfoContent amiibo={amiibo} setEditMode={setEditMode} />}
  </>
}
