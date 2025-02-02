import ProtectedRoute from '../components/ProtectedRoute';

function Blog() {
  return (
    <>
      <ProtectedRoute>
        <h1>You sucessfully in the blog</h1>
      </ProtectedRoute>
    </>
  );
}

export default Blog;
