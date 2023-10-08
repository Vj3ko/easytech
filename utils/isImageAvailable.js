const availableCourseImages = ['frontend']

export const isImageAvailable = course => {
  const available = availableCourseImages.includes(course)
  return available
}
