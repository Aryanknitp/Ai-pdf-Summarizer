class BaseService {
  success(
    data = null,
    message = "Success"
  ) {
    return {
      success: true,
      message,
      data,
    };
  }

  error(
    message =
      "Something went wrong"
  ) {
    return {
      success: false,
      message,
    };
  }
}

const baseService =
  new BaseService();

export default baseService;