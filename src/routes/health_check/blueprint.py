import flask


from src.routes.url_builder import UrlBuilder


url_builder = UrlBuilder()

health_check_blueprint = flask.Blueprint(
    name='health_check',
    import_name=__name__,
    url_prefix=f'{url_builder.base_api}',
)


@health_check_blueprint.route(f'{url_builder.health_check}', methods=['GET', ])
def health_check_endpoint():
    """
    The health check endpoint.
    | **Path**: /api/health_check
    | **Methods**: *GET*
    :return: The health check response.
    :rtype: flask.Response
    """
    return {
        'status': 'OK'
    }
