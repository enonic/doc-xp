.. _x-data:

X-data
------

**X-data** is a concept similar to :ref:`mixins` but, unlike mixins, x-data schemas don't have to be plugged in inline inside content type schema or ``site.xml``
which makes them much more flexible. Unless config of x-data implicitly restricts it from being used for specific content types(s), it will
be automatically made visible in the Content Wizard and user can manually enable it for specific content.

X-data definition file must be placed in the folder ``site/x-data/[name]`` and named
``[name].xml``. For example, ``site/x-data/us-address/us-address.xml``.

.. literalinclude:: code/x-data.xml
    :language: xml

.. TIP::

  X-data may optionally have its own specific icon. The icon can be assigned to x-data by adding a PNG file with
  the same name, in the x-data folder, e.g. ``site/mixins/us-address/us-address.png``

Configuring x-data for content types
````````````````````````````````````

Use regular expressions in the ``allowContentType`` field to filter content types the x-data will be available for.
The aforementioned example of x-data will be available only for ``base:folder`` content type and the example below will be
available for all content types **except** ``base:folder``.

.. literalinclude:: code/x-data-2.xml
    :language: xml

If ``allowContentType`` is not specified, the x-data is assumed to be available for all content types.


.. TIP::

  Like inline mixins, x-data can be plugged in directly inside content type schemas, component descriptors and ``site.xml`` file. Note that
  if x-data is plugged in directly in content type schema but its configuration doesn't allow it for this content type then it won't be available.

.. literalinclude:: code/site-with-xdata.xml
    :language: xml
