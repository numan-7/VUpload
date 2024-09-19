export default function App() {
  return (
  <div class="bg-background text-text-primary min-h-screen p-4">
    <div class="bg-primary p-6 rounded-lg shadow-md">
      <h1 class="text-2xl font-bold mb-4">Upload Your Video</h1>
      <p class="text-text-secondary mb-6">Max upload size: 100MB</p>
      <input type="file" class="bg-secondary text-text-primary p-2 rounded mb-4 w-full"/>
      <button class="bg-accent text-white px-4 py-2 rounded">Upload</button>
    </div>
  </div>
  )
}