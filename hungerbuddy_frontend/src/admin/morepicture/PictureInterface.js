"use client";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  Card,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { postData, getData } from "../../services/FetchNodeServices";

export default function FoodImageUpload() {
  const [categoryList, setCategoryList] = useState([]);
  const [foodItemList, setFoodItemList] = useState([]);

  const [categoryid, setCategoryId] = useState("");
  const [fooditemid, setFoodItemId] = useState("");

  const [files, setFiles] = useState([]);
  const [preview, setPreview] = useState([]);

  /* FETCH CATEGORIES */
  const fetchCategories = async () => {
    const result = await getData("users/fetch_all_category");
    setCategoryList(result.data || []);
  };

  /* FETCH FOOD ITEMS BY CATEGORY */
  const fetchFoodItems = async (cid) => {
    const result = await postData(
      "users/fetch_all_fooditems_by_category_id",
      { categoryid: cid }
    );
    setFoodItemList(result.data || []);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  /* FILE SELECT */
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    setPreview(selectedFiles.map((file) => URL.createObjectURL(file)));
  };

  /* REMOVE IMAGE */
  const handleRemove = (index) => {
    setFiles(files.filter((_, i) => i !== index));
    setPreview(preview.filter((_, i) => i !== index));
  };

  /* SUBMIT / UPLOAD */
  const handleUpload = async () => {
    if (!categoryid || !fooditemid || files.length === 0) {
      alert("Please select category, food item and images");
      return;
    }

    const formData = new FormData();
    formData.append("categoryid", categoryid);
    formData.append("fooditemid", fooditemid);

    files.forEach((file) => {
      formData.append("pictures", file);
    });

    await postData("pictures/upload_food_images", formData, true);

    alert("Images uploaded successfully");

    setFiles([]);
    setPreview([]);
    setFoodItemId("");
    setCategoryId("");
    setFoodItemList([]);
  };

  return (
    <Box
      sx={{
        p: 3,
        background: "#f9f9f9",
        borderRadius: 3,
        maxWidth: 900,
        margin: "auto",
      }}
    >
      <Typography variant="h6" mb={3}>
        Upload Food Images
      </Typography>

      {/* DROPDOWNS */}
      <Grid container spacing={2}>
        <Grid item size={6} md={6}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={categoryid}
              label="Category"
              onChange={(e) => {
                setCategoryId(e.target.value);
                fetchFoodItems(e.target.value);
                setFoodItemId("");
              }}
            >
              {categoryList.map((item) => (
                <MenuItem
                  key={item.categoryid}
                  value={item.categoryid}
                >
                  {item.categoryname}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item size={6} >
          <FormControl fullWidth disabled={!categoryid}>
            <InputLabel>Food Item</InputLabel>
            <Select
              value={fooditemid}
              label="Food Item"
              onChange={(e) => setFoodItemId(e.target.value)}
            >
              {foodItemList.map((item) => (
                <MenuItem
                  key={item.fooditemid}
                  value={item.fooditemid}
                >
                  {item.fooditemname}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* SELECT IMAGES */}
      <Button
        sx={{ mt: 3 }}
        variant="outlined"
        component="label"
        startIcon={<CloudUploadIcon />}
      >
        Select Images
        <input
          hidden
          multiple
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </Button>

      {/* PREVIEW */}
      <Grid container spacing={2} mt={2}>
        {preview.map((img, index) => (
          <Grid item xs={4} md={2} key={index}>
            <Card sx={{ position: "relative", borderRadius: 2 }}>
              <img
                src={img}
                alt="preview"
                style={{
                  width: "100%",
                  height: 100,
                  objectFit: "cover",
                }}
              />
              <IconButton
                size="small"
                sx={{
                  position: "absolute",
                  top: 4,
                  right: 4,
                  bgcolor: "#fff",
                }}
                onClick={() => handleRemove(index)}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* SUBMIT BUTTON */}
      {files.length > 0 && (
        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 4,
            height: 48,
            fontSize: 16,
            textTransform: "none",
            borderRadius: 2,
          }}
          onClick={handleUpload}
        >
          Submit
        </Button>
      )}
    </Box>
  );
}
