.. _mixins:

Mixins
------

Structures of data that are repeated in different content types or component descriptors may be defined as mixins. Such structures (like some
address fields or a combobox with a standard set of values) would be defined once in a mixin and then the mixin would be applied in
other schemas that require these fields. The mixin definition file must be placed in the folder ``site/mixins/[name]`` and named
``[name].xml``. For example, ``site/mixins/us-address/us-address.xml``.

.. literalinclude:: code/mixin.xml
    :language: xml

.. TIP::

  A mixin may optionally have its own specific icon. The icon can be assigned to the mixin by adding a PNG file with
  the same name, in the mixin folder, e.g. ``site/mixins/us-address/us-address.png``

Using a mixin
`````````````

Below is an example of a simple content type that uses the ``us-address`` mixin. In this case fields defined in the mixin will be injected
into the form inside the content type schema and their values will be saved with content data.
Notice that the name of the mixin file is used and not the mixin's Display Name.

.. literalinclude:: code/content-type-with-mixin.xml
    :language: xml

.. TIP::

  Mixins can be used in content types, component descriptors, and the ``site.xml`` file.

.. TIP::

  If you need more flexibility to enable a mixin for specific content types without having to plug it in directly in each content type scheme,
  consider using :ref:`x-data` instead.
